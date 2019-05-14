
const model = require('../model');

module.exports = function (app) {

    // GET
    app.get('/api/providers', (req, res, next) => {
        // filter helpers
        const {locationName: shouldFilter} = req.body;
        const {locationName} = req.body;
        const filter = {};
        const query = shouldFilter ? {name: locationName} : {};

        model.Location.findOne(query)
        .then(function (loc) {
            if (shouldFilter) {
                filter.locationId = loc.id
            }
        }).then(function () {
            return model.Provider.find(filter)
        }).then(function () {
            res.send(data);
        }).catch(err => next(err));
    });

    // POST
    app.post('/api/providers', (req, res, next) => {
        // check if location exists
        model.Location.findOne({ name: req.body.location })
        .then(function (loc) {
            // create new provider
            req.body.locationId = loc.id;
            const provider = new model.Provider(req.body);
            return provider.save();
        }).then(function (provider) {
            res.send(provider.id);
        }).catch(err => next(err))
    });

};