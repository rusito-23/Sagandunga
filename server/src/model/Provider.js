
const mongoose = require('mongoose');
const User = require('./Users.js').User;
const options = require('./Users.js').options;

// Schema
const ProviderSchema = new mongoose.Schema({
    storeName: {type: String, required: true},
    maxDeliveryDistance: {type: Number, required: true},
}, options);

// custom attributes
ProviderSchema.existing = 'provider';
ProviderSchema.nonExisting = 'provider';

// Model
module.exports.Provider = User.discriminator('Provider', ProviderSchema);

