const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (UserSchema) => {

    const encrypt = (pass, salt) => {
        return crypto.pbkdf2Sync(
            pass,
            salt,
            10000,
            512,
            'sha512').toString('hex')
    };

    // Password

    UserSchema.methods.setPassword = function(password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = encrypt(password, this.salt);
    };

    UserSchema.methods.validatePassword = function(password) {
        return encrypt(password, this.salt) === this.hash;
    };

    // Token

    UserSchema.methods.generateJWT = function() {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);

        return jwt.sign({
            email: this.email,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10)
        }, 'secret')
    };

    UserSchema.methods.toAuthJSON = function() {
        return {
            _id: this._id,
            email: this.email,
            username: this.username,
            kind: this.kind,
            storename: this.storeName,
            token: this.generateJWT(),
        }
    }

};