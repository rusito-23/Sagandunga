
const mongoose = require('mongoose');


const ConsumerSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    locationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true},
    balance: {type: Number, required: true, default: 0},
});

mongoose.model('Consumer', ConsumerSchema);
module.exports.Consumer = mongoose.model('Consumer');