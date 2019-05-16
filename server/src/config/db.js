const custom = require('./custom');
const mongoose = require('mongoose');

const dbCodes = {
    DUPLICATED_KEY: 11000,
};

mongoose.plugin((schema) => {

    // custom error for obj validation exception
    schema.post('validate', (err) => {
        if (err) { throw custom.Error.Malformed() }
    });

    // change duplicate key error
    schema.post('save', (err) => {
        if (err.code === dbCodes.DUPLICATED_KEY) {
            throw custom.Error.Existing(schema.existing)
        }
    });

    // exception if not found
    schema.post('findOne', (doc) => {
        if (!doc) { throw custom.Error.NonExisting(schema.nonExisting) }
    });

});

const connect = () => {
    mongoose.Promise = global.Promise;
    return mongoose.connect('mongodb://localhost:27017/Sagandunga', { useNewUrlParser: true })
};

module.exports = {
    connect: connect,
    codes: dbCodes,
};
