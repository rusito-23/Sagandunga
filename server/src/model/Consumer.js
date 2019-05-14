
const mongoose = require('mongoose');
const User = require('./Users.js').User;
const options = require('./Users.js').options;

// Schema
const ConsumerSchema = new mongoose.Schema({
}, options);

// custom attributes
ConsumerSchema.existing = 'consumer';
ConsumerSchema.nonExisting = 'consumer';

// Model
module.exports.Consumer = User.discriminator('Consumer', ConsumerSchema);

