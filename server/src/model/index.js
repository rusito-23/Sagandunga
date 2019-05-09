/*
 * Export all my models in a single dependecie
 * */

const loc = require('./Location.js');
const users = require('./Users.js');
const item = require('./Item.js');

module.exports = {
    Location: loc.Location,
    User: users.User,
    Consumer: users.Consumer,
    Provider: users.Provider,
    Item: item.Item,
};
