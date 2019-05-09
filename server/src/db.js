/*
 * MONGOOSE DB SETUP
 * */

const mongoose = require('mongoose');


module.exports.connect = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Sagandunga', { useNewUrlParser: true })
        .then(res => console.log("Connected to DB"))
        .catch(err => console.log(err))
};

module.exports.errorCodes = {
    DUPLICATED_KEY: 11000,
};
