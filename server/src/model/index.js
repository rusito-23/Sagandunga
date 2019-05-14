/*
 * Models
 * */

const loc = require('./Location.js');
const user = require('./Users.js');
const consumer = require('./Consumer.js');
const provider = require('./Provider.js');
const item = require('./Item.js');
const order = require('./Order.js');

module.exports = {
    Location: loc.Location,
    User: user.User,
    Consumer: consumer.Consumer,
    Provider: provider.Provider,
    Item: item.Item,
    Order: order.Order,
};
