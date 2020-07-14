const custom = require('./custom');
const mongoose = require('mongoose');

const dbCodes = {
    DUPLICATED_KEY: 11000,
}; module.exports.codes = dbCodes;

module.exports.plugin = () => {
    mongoose.plugin((schema) => {
        if(schema.name) { console.log(`Setting plugin for collection -> ${schema.name}`); }

        // duplicate key error
        schema.post('save', (err, doc, next) => {
            if (err.code === dbCodes.DUPLICATED_KEY) {
                throw custom.Error.Existing(schema.existing)
            } else { next() }
        });

        // not found
        schema.post('findOne', (doc) => {
            if (!doc) { throw custom.Error.NonExisting(schema.nonExisting) }
        });

    })
};

module.exports.connect = () => {
    mongoose.Promise = global.Promise;
    return mongoose.connect('mongodb://localhost:27017/Deliveroo', { useNewUrlParser: true })
};
