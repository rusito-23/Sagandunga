
const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    providerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    price: {type: Number, required: true},
});
ItemSchema.index({ name: 1, providerId: 1 }, { unique: true });

mongoose.model('Item', ItemSchema);
module.exports.Item = mongoose.model('Item');