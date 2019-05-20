const mongoose = require('mongoose');
const { User, options } = require('./users.js');

// Schema
const ConsumerSchema = new mongoose.Schema({}, options);

// custom attributes
ConsumerSchema.name = 'Consumer';
ConsumerSchema.existing = 'consumer';
ConsumerSchema.nonExisting = 'consumer';

// Model
module.exports = User.discriminator('Consumer', ConsumerSchema);

