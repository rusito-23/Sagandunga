const model = require('../model');
const { validate } = require('../config/custom');
const userController = require('./userController');
const { body } = require('express-validator/check');

// find
module.exports.find = (req, res, next) => {
    model.Consumer.find({})
        .then((consumers) => {
            res.send(consumers.map(c => {
                return {
                    id: c._id,
                    username: c.username,
                    locationId: c.locationId,
                };
            }));
        }).catch(next)
};

// create
module.exports.create = (req, res, next) => {
    validate(req);
    // check if location exists
    model.Location.findOne({name: req.body.location})
    .then((loc) => {
        // create new consumer
        req.body.locationId = loc.id;
        const consumer = new model.Consumer(req.body);
        consumer.setPassword(req.body.password);
        return consumer.save();
    }).then((consumer) => {
        return res.status(200).send(consumer.id);
    }).catch(next)
};

// deposit
module.exports.deposit = (req, res, next) => {
    validate(req);
    // search username
    model.Consumer.findOne({username: req.body.username})
    .then((user) => {
        user.balance += req.body.amount;
        return user.save()
    }).then(() => {
        res.send('OK')
    }).catch(next)
};

// validations
module.exports.validate = {
    createConsumer: userController.validate.create,
    deposit: [
        body('username').isString(),
        body('amount').isNumeric()
    ],
};