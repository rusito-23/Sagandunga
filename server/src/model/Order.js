
const mongoose = require('mongoose');

// Schema
const OrderSchema = new mongoose.Schema({
    providerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    consumerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
    items: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        amount: { type: Number, required: true }
    }],
    status: { type: String, enum: ['payed', 'delivered', 'finished'], required: true, default: 'payed' }
});

// custom attributes
OrderSchema.existing = 'order';
OrderSchema.nonExisting = 'order';

// custom methods
OrderSchema.statics.findByUser = function(user) {
    const userQuery = {$or: [{providerId: user._id}, {consumerId: user._id}]};
    return this.aggregate([
        { $match : userQuery},
        {$lookup:
                { from: 'users',
                  localField: 'providerId',
                  foreignField: '_id',
                  as: 'provider' } },
        { $lookup:
                { from: 'users',
                  localField: 'consumerId',
                  foreignField: '_id',
                  as: 'consumer' } },
        { $unwind : '$provider' },
        { $unwind : '$consumer' },
        { $group: {
                _id: '$_id',
                consumerUsername: { $first: '$consumer.username' },
                providerUsername: { $first: '$provider.username' },
                status : { $first : '$status'}
        }}
    ])
};

// Model
mongoose.model('Order', OrderSchema);
module.exports.Order = mongoose.model('Order');