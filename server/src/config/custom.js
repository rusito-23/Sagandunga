
// CUSTOM ERROR

const status = {
    NON_EXISTING: 404,
    EXISTING: 405,
    MALFORMED: 400,
    NEGATIVE: 407,
    NON_SUFFICIENT: 408,
    UNAUTH: 401,
    FORBIDDEN: 403,
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

    static Unauthorized() {
        return new CustomError(status.UNAUTH, 'Unauthorized')
    }

    static Forbidden() {
        return new CustomError(status.FORBIDDEN, 'Forbidden')
    }

}

module.exports = {
    Error: CustomError,
};
