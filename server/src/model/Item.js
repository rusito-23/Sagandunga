
const mongoose = require('mongoose');


// schema
const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    providerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    price: {type: Number, required: true},
});
ItemSchema.index({ name: 1, providerId: 1 }, { unique: true });

// custom schema attributes
ItemSchema.existing = 'item for provider';
ItemSchema.nonExisting = 'item';

// model creation
mongoose.model('Item', ItemSchema);
module.exports.Item = mongoose.model('Item');