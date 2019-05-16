const mongoose = require('mongoose');
const custom = require('../config/custom');

// schema
const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    providerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    price: {type: Number, required: true},
});
ItemSchema.index({name: 1, providerId: 1}, {unique: true});

// custom schema attributes
ItemSchema.existing = 'item for provider';
ItemSchema.nonExisting = 'item';
ItemSchema.nonExistingForProvider = 'item for provider';

// custom static functions
ItemSchema.statics.findForOrder = function(names, providerId) {
    const query = {name: {$in: names}, providerId: providerId};

    return this.find(query)
    .then((items) => {
        if (items.length !== names.length) {
            throw custom.Error.NonExisting('item for provider')
        }
        return items
    })
};

// model creation
module.exports = mongoose.model('Item', ItemSchema);
