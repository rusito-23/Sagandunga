const mongoose = require('mongoose');
const custom = require('../config/custom');

// General
const options = {discriminatorKey: 'kind'};

// Schema
const UserSchema = new mongoose.Schema({

    // User attributes
    username: {type: String, required: true, unique: true},
    balance: {type: Number, required: true, default: 0},
    locationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true},

    // Authentication
    email: {type: String, required: true, unique: true},
    hash: {type: String, required: true},
    salt: {type: String, required: true},

}, options);

// custom attributes
UserSchema.name = 'user';
UserSchema.existing = 'user';
UserSchema.nonExisting = 'user';

// storeName unique for every provider
UserSchema.index({storeName: 1}, {
    unique: true,
    partialFilterExpression: {
        kind: 'Provider'
    }
});

// custom static methods
UserSchema.statics.updateBalance = (consumer, provider, totalPrice) => {
    // check consumer balance
    if (consumer.balance - totalPrice < 0) {
        throw custom.Error.NonSufficientBalance()
    }

    // update users
    consumer.balance -= totalPrice;
    provider.balance += totalPrice;
    return Promise.all([consumer.save(), provider.save()])
};

// Setup Authentication
require('./user-auth.js')(UserSchema);

// Model
module.exports = {
    User: mongoose.model('User', UserSchema),
    options: options,
};
