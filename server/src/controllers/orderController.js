const model = require('../model');
const { body } = require('express-validator/check');
const { validate, Error } = require('../config/custom');

// find
module.exports.find =  (req, res, next) => {
    validate(req);
    model.User.findOne(req.body)
    .then(user =>
        model.Order.findByUser(user)
    ).then(orders =>
        // we found the orders
        res.status(200).send(orders)
    ).catch(next)
};

// create
module.exports.create = (req, res, next) => {
    validate(req);
    // search provider and consumer
    const userQuery = {
        username: {
            $in:
                [req.body['providerUsername'], req.body['consumerUsername']]
        }
    };
    model.User.find(userQuery)
    .then(users => {
        // asign consumer and provider
        const consumer = users.find(e => e.kind === 'Consumer');
        if (!consumer) { throw Error.NonExisting('consumer')}
        const provider = users.find(e => e.kind === 'Provider');
        if (!provider) { throw Error.NonExisting('provider')}
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
                }
            })
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
    }).then((order) => {
        res.status(200).send(order.id);
    }).catch(next)
};

// deliver
module.exports.deliver =  (req, res, next) => {
    model.Order.findOne({_id: req.params.id})
    .then(order => {
        order.status = 'delivered';
        return order.save();
    })
    .then(() => res.send('OK'))
    .catch(next)
};

// delete
module.exports.delete = (req, res, next) => {
    model.Order.findOne({_id: req.params.id})
    .then(order => {
        return order.remove();
    })
    .then(() => res.send('OK'))
    .catch(next)
};

// validate
module.exports.validate = {
    find: [ body('username').exists() ],
    create: [
        body('providerUsername').exists(),
        body('consumerUsername').exists(),
        body('items').isArray(),
        body('items.*.name').exists(),
        body('items.*.amount').isNumeric()
    ]
};
