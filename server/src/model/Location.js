
const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    coordX: {type: Number, required: true},
    coordY: {type: Number, required: true},
});
LocationSchema.name = 'location';

mongoose.model('Location', LocationSchema);
module.exports.Location = mongoose.model('Location');
