const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (UserSchema) => {

    const encrypt = (pass, salt) => {
        crypto.pbkdf2Sync(
            pass,
            salt,
            10000,
            512,
            'sha512').toString('hex')
    };

    // Password

    UserSchema.methods.setPassword = (password) => {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = encrypt(password, this.salt);
    };

    UserSchema.methods.validatePassword = (password) => {
        return encrypt(pass, this.salt) === password;
    };

    // Token

    UserSchema.methods.generateJWT = () => {
        const today = new Date();
        const expirationDate = new Date(today.getDate() + 60);

        return jwt.sign({
            email: this.email,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10)
        }, 'secret')
    };

    // TODO: should I have this?
    UserSchema.methods.toAuthJSON = () => {
        return {
            _id: this._id,
            email: this.email,
            token: this.generateJWT(),
        }
    }

};