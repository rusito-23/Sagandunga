
const mongoose = require('mongoose');
const custom = require('../config/custom.js');

// General
const options = { discriminatorKey: 'kind'};
module.exports.options = options;

// Schema
const UserSchema = new mongoose.Schema({

    // User attributes
    username: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },

    // Authentication
    email: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true },

}, options);

// custom attributes
UserSchema.existing = 'user';
UserSchema.nonExisting = 'user';

// username index as unique
UserSchema.index({ username: 1, email: 1 }, {
    unique: true,
});

// storeName unique for every provider
UserSchema.index({ storeName: 1 },{
    unique: true,
    partialFilterExpression: {
        kind : 'Provider'
    }
});

// custom static methods
UserSchema.statics.updateBalance = function(consumer, provider, totalPrice) {
    // check consumer balance
    if (consumer.balance - totalPrice < 0) { throw custom.Error.NonSufficientBalance() }

    // update users
    consumer.balance -= totalPrice; provider.balance += totalPrice;
    return Promise.all([consumer.save(), provider.save()])
};

// Setup Authentication
require('./UserAuth.js')(UserSchema);

// Model
module.exports.User = mongoose.model('User', UserSchema);
