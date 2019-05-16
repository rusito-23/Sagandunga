const model = require('../model');
const mongoose = require('mongoose');
const { body } = require('express-validator/check');

// delete
module.exports.delete = (req, res, next) => {
    model.User.findOne({_id: mongoose.Schema.ObjectId(req.params.id)})
        .then((user) => {
            return user.remove()
        }).then(() => {
            res.send('OK');
        }).catch(next)
};

// validate
module.exports.validate = {
    create: [
        body('email').isEmail(),
        body('username').exists(),
        body('password').exists(),
        body('location').isString(),
    ]
};
