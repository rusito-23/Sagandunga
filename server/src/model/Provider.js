
const mongoose = require('mongoose');


const ProviderSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    storeName: {type: String, required: true},
    locationId: {type: String, required: true},
    maxDeliveryDistance: {type: Number, required: true},
});

mongoose.model('Provider', ProviderSchema);
module.exports.Provider = mongoose.model('Provider');
