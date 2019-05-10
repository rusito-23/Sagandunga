
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    providerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    consumerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
    items: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        amount: { type: Number, required: true }
    }],
    status: { type: String, enum: ['payed', 'delivered', 'finished'], required: true, default: 'payed' }
});

mongoose.model('Order', OrderSchema);
module.exports.Order = mongoose.model('Order');