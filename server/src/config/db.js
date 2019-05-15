const custom = require('./custom.js');
const mongoose = require('mongoose');

const dbCodes = {
    DUPLICATED_KEY: 11000,
};

mongoose.plugin(function (schema) {

    // custom error for obj validation exception
    schema.post('validate', function (err, doc, next) {
        if (err) {
            next(custom.Error.Malformed())
        } else {
            next(doc)
        }
    });

    // change duplicate key error
    schema.post('save', function (err, doc, next) {
        if (err.code === dbCodes.DUPLICATED_KEY) {
            next(custom.Error.Existing(schema.existing))
        } else {
            next(doc)
        }
    });

    // exception if not found
    schema.post('findOne', function (doc) {
        if (!doc) { throw custom.Error.NonExisting(schema.nonExisting) }
    });

    // exception if not found on delete
    schema.post('findOneAndDelete', function (err, doc) {
        if (!doc) { throw custom.Error.NonExisting(schema.nonExisting) }
    });
});

const connect = function () {
    mongoose.Promise = global.Promise;
    return mongoose.connect('mongodb://localhost:27017/Sagandunga', { useNewUrlParser: true })
};

module.exports = {
    connect: connect,
    codes: dbCodes,
};
