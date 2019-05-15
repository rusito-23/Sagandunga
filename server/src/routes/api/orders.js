const model = require('../../model');
const router = require('express').Router();

// GET
router.get('/', (req, res, next) => {
    model.User.findOne(req.body)
    .then(user =>
        model.Order.findByUser(user)
    ).then(orders =>
        // we found the orders
        res.status(200).send(orders)
    ).catch(next)
});

// CREATE
router.post('/', (req, res, next) => {
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
});

// DELIVER
router.post('/deliver/:id', (req, res, next) => {
    model.Order.findOne({_id: req.params.id})
    .then(order => {
        order.status = 'delivered';
        return order.save();
    })
    .then(() => res.send('OK'))
    .catch(next)
});

// DELETE
router.post('/delete/:id', (req, res, next) => {
    model.Order.findOne({_id: req.params.id})
    .then(order => {
        return order.remove();
    })
    .then(() => res.send('OK'))
    .catch(next)
});

module.exports = router;
