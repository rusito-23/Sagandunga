const passport = require('passport');
const custom = require('../config/custom');
const { body } = require('express-validator/check');

module.exports.login = (req, res, next) => {
    // authenticate
    return passport.authenticate(
        'local',
        {session: false},
        (err, passportUser, info) => {
            if (err) {
                return next(err)
            }

            if (passportUser) {
                passportUser.token = passportUser.generateJWT();
                return res.json({user: passportUser.toAuthJSON()})
            }

            throw custom.Error.Unauthorized();
        }
    )(req, res, next)
};

module.exports.validate = {
    login: [ body('password').exists(), body('auth').exists() ]
};
