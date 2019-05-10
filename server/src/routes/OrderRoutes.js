
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    // GET ALL FOR USER
    app.get('/api/orders', (req, res) => {
        model.User.find(req.body).then(function (user) {
            // find every order where user is provider or consumer
            const userQuery = {$or: [{providerId: user.id}, {consumerId: user.id}]};
            model.Order.find(userQuery).then(function (orders) {

                // if we found the orders, delete items
                // TODO: and join with consumer and provider data
                delete orders.items;
                res.status(200).send(orders);

            }).catch(function (err) {
                errorHandler(err, res);
            })
        }).catch(function () {
            res.status(404).send('Non existing user');
        })
    });

    // CREATE ORDER
    app.post('/api/orders', (req, res) => {
        // search provider and consumer
        const userQuery = {username: {$or: [req.body['providerUsername'], req.body['consumerUsername']]}};
        model.User.find(userQuery).then(function (users) {
            // create new order
            let order = {};

            // asign consumer and provider
            order.consumerId = users.find(function (e) { return e.kind === 'Consumer'})._id;
            order.providerId = users.find(function (e) { return e.kind === 'Provider'})._id;

            // search items
            const itemQuery = { name : { $in: req.body['items'].name } };
            model.Item.find(itemQuery).then(function (res) {

                // create items array with amount information
                const items = [];
                for (let item in res) {
                    items.concat({
                        id : item.id,
                        amount : req.body['items'].find(function (e) { return e.name === item.name }).amount
                    });
                }

                // complete and save order
                order.items = items;
                order.save().then(function (order) {
                    res.status(200).send(order.id);
                }).catch(function (err) {
                    errorHandler(err, res);
                })
            }).catch(function () {
                res.status(404).send('Non existing provider/consumer/item');
            })
        }).catch(function () {
            res.status(404).send('Non existing provider/consumer/item');
        })
    });

};