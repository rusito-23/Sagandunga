/*
 * MONGOOSE DB SETUP
 * */

const mongoose = require('mongoose');


const connect = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Sagandunga', { useNewUrlParser: true })
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log(err))
};

const dbCodes = {
    DUPLICATED_KEY: 11000,
};

const status = {
    NON_EXISTING: 404,
    EXISTING: 409,
    MALFORMED: 400,
};

class DbError extends Error {
    constructor(statusCode, message) {
        super();
        this.customError = true;
        this.statusCode = statusCode;
        this.message = message;
    }

    static NonExisting(message) {
        return new DbError(status.NON_EXISTING, message)
    }

    static Existing(message) {
        return new DbError(status.EXISTING, message)
    }

    static Malformed() {
        return new DbError(status.MALFORMED, 'Malformed exception')
    }

}

module.exports = {
    connect: connect,
    codes: dbCodes,
    Error: DbError
};
