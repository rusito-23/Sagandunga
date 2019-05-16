const model = require('../model');
const { body } = require('express-validator/check');
const { validate } = require('../config/custom');

// find
module.exports.find = (req, res, next) => {
    model.Location.find({}).select({_id: 0, name: 1, coordX: 1, coordY: 1})
    .then((locs) => {
        res.send(locs);
    }).catch(next)
};

// create
module.exports.create = (req, res, next) => {
    validate(req);
    new model.Location(req.body).save()
    .then((loc) => {
        res.status(200).send(loc.id);
    }).catch(next)
};

// validate
module.exports.validate = {
    create: [
        body('name').exists(),
        body('coordX').isNumeric(),
        body('coordY').isNumeric()
    ]
};
