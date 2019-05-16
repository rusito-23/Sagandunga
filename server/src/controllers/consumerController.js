const model = require('../model');
const { validate } = require('../config/custom');
const userController = require('./userController');

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
        new model.Consumer(req.body).save();
    }).then((consumer) => {
        return res.status(200).send(consumer.id);
    }).catch(next)
};

// validations
module.exports.validate = {
    createConsumer: userController.validate.create
};