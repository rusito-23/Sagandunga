
const mongoose = require('mongoose');

// General
const options = { discriminatorKey: 'kind'};
module.exports.options = options;

// Schema
const UserSchema = new mongoose.Schema({

    // User attributes
    username: {type: String, required: true},
    balance: {type: Number, required: true, default: 0},
    locationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true},

    // TODO: Authentication - mail?
}, options);

// custom attributes
UserSchema.existing = 'user';
UserSchema.nonExisting = 'user';

// username index as unique
UserSchema.index({ username: 1 }, {
    unique: true,
});

// storeName unique for every provider
UserSchema.index({ storeName: 1 },{
    unique: true,
    partialFilterExpression: {
        kind : 'Provider'
    }
});

// Model
module.exports.User = mongoose.model('User', UserSchema);
