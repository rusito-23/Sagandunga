
const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
    name: String,
    coordX: Number,
    coordY: Number
});

mongoose.model('Location', LocationSchema);
module.exports.Location = mongoose.model('Location');
