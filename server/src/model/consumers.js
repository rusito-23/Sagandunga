const mongoose = require('mongoose');
const User = require('./users.js').User;
const options = require('./users.js').options;

// Schema
const ConsumerSchema = new mongoose.Schema({}, options);

// custom attributes
ConsumerSchema.existing = 'consumer';
ConsumerSchema.nonExisting = 'consumer';

// Model
module.exports = User.discriminator('Consumer', ConsumerSchema);

