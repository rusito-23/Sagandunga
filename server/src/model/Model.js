/*
 * Export all my models in a single dependecie
 * */

var user = require('./User.js');

module.exports = {
    User: user.User,
};
