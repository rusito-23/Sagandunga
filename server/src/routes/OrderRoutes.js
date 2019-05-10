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
    const userQuery = {username: {$in: [req.body['providerUsername'], req.body['consumerUsername']]}};
    model.User.find(userQuery).then(function (users) {
      // create new order
      let order = {};

      // asign consumer and provider
      order.consumerId = users.find(function (e) {
        return e.kind === 'Consumer'
      })._id;
      order.providerId = users.find(function (e) {
        return e.kind === 'Provider'
      })._id;

      // search items
      const itemQuery = { name: {$in: req.body['items'].map(e => e.name) }};
      model.Item.find(itemQuery).then(function (items) {

        // complete order with items amount information
        order.items = items.map(item => {
          if (!item.providerId.equals(order.providerId)) { throw 404 }
          return {
            id: item._id,
            amount: req.body['items'].find(i => i.name === item.name).amount
          }
        });

        // save order
        new model.Order(order).save().then(function (order) {
          res.status(200).send(order.id);
        }).catch(function (err) {
          errorHandler(err, res);
        })

      }).catch(function (err) {
        console.log(err);
        res.status(404).send('Non existing item for provider');
      })
    }).catch(function (err) {
      console.log(err);
      res.status(404).send('Non existing provider/consumer');
    })
  });

};