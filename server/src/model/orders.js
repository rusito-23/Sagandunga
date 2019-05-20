const mongoose = require('mongoose');
const Item = require('./items');

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
OrderSchema.name = 'Order';
OrderSchema.existing = 'order';
OrderSchema.nonExisting = 'order';

// custom static methods
OrderSchema.statics.findByUser = (user) => {
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

// custom methods
OrderSchema.methods.totalPrice = function() { return new Promise(((resolve, reject) => {
    Item.find({_id: {$in: this.items.map(i => i.id)}})
        .then(items => {
            resolve( items
                    // merge both arrays
                    .map(item => { return {
                        price: item.price,
                        amount: this.items.find(i => i.id.toString() === item.id).amount
                    }})
                    // compute the totalPrice price for the amount
                    .map(item => item.price * item.amount)
                    // compute sum
                    .reduce((a, b) => a + b, 0));
        }).catch(err => reject(err));
}))};

// Model
module.exports = mongoose.model('Order', OrderSchema);
