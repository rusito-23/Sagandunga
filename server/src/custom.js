
// CUSTOM ERROR

const status = {
    NON_EXISTING: 404,
    EXISTING: 409,
    MALFORMED: 400,
    NEGATIVE: 403,
    NON_SUFFICIENT: 401
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
        return new CustomError(status.MALFORMED, 'Malformed entity')
    }

    static Negative(name) {
        return new CustomError(status.NEGATIVE, `Negative ${name}`)
    }

    static NonSufficientBalance() {
        return new CustomError(status.NON_SUFFICIENT, 'Non sufficient funds')
    }

}

module.exports = {
    Error: CustomError,
};
