const model = require('../model');
const db = require('../db.js');

module.exports = function (app) {

    // GET ALL FOR USER
    app.get('/api/orders', (req, res, next) => {
        model.User.findOne(req.body)
            .then(user =>
                model.Order.findByUser(user)
            ).then(orders =>
                // we found the orders
                res.status(200).send(orders)
            ).catch(err => next(err))
    });

    // CREATE ORDER
    app.post('/api/orders', (req, res, next) => {
        // create new order
        let order = {};

        // search provider and consumer
        const userQuery = {username: {$in: [req.body['providerUsername'], req.body['consumerUsername']]}};
        model.User.find(userQuery)
            .then(users => {
                // asign consumer and provider
                order.consumerId = users.find(e => e.kind === 'Consumer')._id;
                order.providerId = users.find(e => e.kind === 'Provider')._id;

                // search items
                const itemQuery = { name: {$in: req.body['items'].map(e => e.name),
                                    providerId: order.providerId }};
                return model.Item.find(itemQuery)
            }).then(items => {
                // complete order with items amount information
                order.items = items.map(item => { return {
                    id: item._id,
                    amount: req.body['items'].find(i => i.name === item.name).amount
                }});

                // save order
                return new model.Order(order).save()
            }).then(function (order) {
                res.status(200).send(order.id);
        }).catch(err => next(err))
    });

}
;