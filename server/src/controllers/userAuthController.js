const passport = require('passport');
const custom = require('../config/custom');
const model = require('../model');
const { body, check } = require('express-validator/check');

module.exports.login = (req, res, next) => {
    // search for email
    model.User.findOne({$or: [{username: req.body.user.auth}, {email: req.body.user.auth}]})
    .then((user) => {
        req.body.user.email = user.email;
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
    }).catch(next)
};

module.exports.validate = {
    login: [ body('password').exists() ]
};
