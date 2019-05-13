
// CUSTOM ERROR

const status = {
    NON_EXISTING: 404,
    EXISTING: 409,
    MALFORMED: 400,
    NEGATIVE: 403,
};

class CustomError extends Error {
    constructor(statusCode, message) {
        super();
        this.customError = true;
        this.statusCode = statusCode;
        this.message = message;
    }

    static NonExisting(name) {
        return new CustomError(status.NON_EXISTING, `Non existing ${name}`)
    }

    static Existing(name) {
        return new CustomError(status.EXISTING, `Existing ${name}`)
    }

    static Malformed() {
        return new CustomError(status.MALFORMED, 'Malformed exception')
    }

}

module.exports = {
    Error: CustomError,
};
