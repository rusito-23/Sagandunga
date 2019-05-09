
const mongoose = require('mongoose');

// GENERAL
const options = { discriminatorKey: 'kind'};

// USER SCHEMA
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    locationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true},
}, options);

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
const User = mongoose.model('User', UserSchema);

// CONSUMER SCHEMA
const ConsumerSchema = new mongoose.Schema({
    balance: {type: Number, required: true, default: 0},
}, options);
const Consumer = User.discriminator('Consumer', ConsumerSchema);

// PROVIDER SCHEMA
const ProviderSchema = new mongoose.Schema({
    storeName: {type: String, required: true},
    maxDeliveryDistance: {type: Number, required: true},
}, options);
const Provider = User.discriminator('Provider', ProviderSchema);

// EXPORTS
module.exports ={
    User: User,
    Consumer: Consumer,
    Provider: Provider
};
