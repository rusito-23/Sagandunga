/*
 * Export all my models in a single dependecie
 * */

const loc = require('./Location.js');
const consumer = require('./Consumer.js');
const provider = require('./Provider.js');
const item = require('./Item.js');

module.exports = {
    Location: loc.Location,
    Consumer: consumer.Consumer,
    Provider: provider.Provider,
    Item: item.Item,
};
