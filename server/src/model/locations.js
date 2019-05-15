const mongoose = require('mongoose');

// schema
const LocationSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    coordX: {type: Number, required: true},
    coordY: {type: Number, required: true},
});

// custom attributes
LocationSchema.existing = 'location';
LocationSchema.nonExisting = 'location';

// model
module.exports = mongoose.model('Location', LocationSchema);
