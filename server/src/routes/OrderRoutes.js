const model = require('../model');

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
        // search provider and consumer
        const userQuery = {username: {$in:
                    [req.body['providerUsername'], req.body['consumerUsername']]}};
        model.User.find(userQuery)
        .then(users => {
            // asign consumer and provider
            const consumer = users.find(e => e.kind === 'Consumer');
            const provider = users.find(e => e.kind === 'Provider');
            // search items
            return Promise.all([
                model.Item.findForOrder(req.body['items'].map(e => e.name), provider.id),
                consumer,
                provider
            ])
        }).then(([items, consumer, provider]) => {
            // create order
            const order = new model.Order({
                consumerId: consumer.id,
                providerId: provider.id,
                items: items.map(item => {
                return {
                    id: item._id,
                    amount: req.body['items'].find(i => i.name === item.name).amount
                }})
            });
            // compute totalPrice
            return Promise.all([order.totalPrice(), order, consumer, provider])
        }).then(([totalPrice, order, consumer, provider]) => {
            // update consumer and provider balance
            return Promise.all([
                model.User.updateBalance(consumer, provider, totalPrice),
                order
            ])
        }).then(([_, order]) => {
            // save order
            return order.save()
        }).then(function (order) {
            res.status(200).send(order.id);
        }).catch(err => next(err))
    });

    // DELIVER ORDER
    app.post('/api/orders/deliver/:id', function (req, res, next) {
        model.Order.findOne({_id: req.params.id})
        .then(order => {
            order.status = 'delivered';
            return order.save();
        })
        .then(() => res.send('OK'))
        .catch(err => next(err))
    });

    // DELETE ORDER
    app.post('/api/orders/delete/:id', function (req, res, next) {
        model.Order.findOne({_id: req.params.id})
        .then(order => {
            return order.remove();
        })
        .then(() => res.send('OK'))
        .catch(err => next(err))
    })

};