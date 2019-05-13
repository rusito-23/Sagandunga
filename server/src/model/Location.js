
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
mongoose.model('Location', LocationSchema);
module.exports.Location = mongoose.model('Location');
