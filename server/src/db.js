/*
 * MONGOOSE DB SETUP
 * */
const custom = require('./custom.js');

const mongoose = require('mongoose');

const dbCodes = {
    DUPLICATED_KEY: 11000,
};

// change validation exception for all schemas
mongoose.plugin(function (schema) {
    schema.post('validate', function (err, doc, next) {
        if (err) {
            next(custom.Error.Malformed())
        } else {
            next(doc)
        }
    })
});

// change duplicate key error
mongoose.plugin(function (schema) {
    schema.post('save', function (err, doc, next) {
        if (err.code === dbCodes.DUPLICATED_KEY) {
            next(custom.Error.Existing(schema.name))
        } else {
            next(doc)
        }
    })
});

const connect = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Sagandunga', { useNewUrlParser: true })
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log(err))
};

module.exports = {
    connect: connect,
    codes: dbCodes,
};
