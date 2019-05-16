const mongoose = require('mongoose');
const { User, options } = require('./users.js');

// Schema
const ProviderSchema = new mongoose.Schema({
    storeName: {type: String, required: true},
    maxDeliveryDistance: {type: Number, required: true},
}, options);

// custom attributes
ProviderSchema.existing = 'provider';
ProviderSchema.nonExisting = 'provider';

// Model
module.exports = User.discriminator('Provider', ProviderSchema);
