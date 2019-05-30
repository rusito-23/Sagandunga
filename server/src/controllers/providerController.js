const model = require('../model');
const { body } = require('express-validator/check');
const userController = require('./userController');
const { validate } = require('../config/custom');

// find
module.exports.find = (req, res, next) => {
    // filter helpers
    const {locationName: shouldFilter} = req.body;
    const {locationName} = req.body;
    const filter = {};
    const query = shouldFilter ? {name: locationName} : {};

    model.Location.findOne(query)
    .then((loc) => {
        if (shouldFilter) {
            filter.locationId = loc.id
        }
    }).then(() => {
        return model.Provider.find(filter, {
            storeName: 1, username: 1, maxDeliveryDistance: 1, kind: 1
        })
    }).then((providers) => {
        res.send(providers);
    }).catch(next);
};

// create
module.exports.create = (req, res, next) => {
    validate(req);
    // check if location exists
    model.Location.findOne({name: req.body.location})
    .then((loc) => {
        // create new provider
        req.body.locationId = loc.id;
        const provider = new model.Provider(req.body);
        provider.setPassword(req.body.password);
        return provider.save();
    }).then((provider) => {
        res.send(provider.id);
    }).catch(next)
};


// validate
module.exports.validate = {
    create: userController.validate.create.concat([
        body('storeName').isString(),
        body('maxDeliveryDistance').isNumeric()
    ])
};
