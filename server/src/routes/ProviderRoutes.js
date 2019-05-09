
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    const getProviders = function (filter, res) {
        const query = model.Provider.find(filter);
        query.exec().then(function (data) {
            res.send(data);
        }).catch(function (err) { errorHandler(err, res); })
    };

    // GET
    app.get('/api/providers', (req, res) => {
        const filter = {};
        if (req.body.locationName !== undefined) {

            // check if location exists
            const locQuery = model.Location.findOne({ name: req.body.locationName });
            locQuery.exec().then(function (loc) {

                // filter by locationId
                filter.locationId = loc.id;
                getProviders(filter, res);

            }).catch(function () {
                // 404 : Non existing location
                res.status(404).send("Non existing location");
            });
        } else {
            getProviders(filter, res);
        }

    });

    // POST
    app.post('/api/providers', (req, res) => {
        // check if location exists
        const locQuery = model.Location.findOne({ name: req.body.location });
        locQuery.exec().then(function (loc) {

            // create new provider
            delete req.body.location;
            req.body.locationId = loc.id;
            const provider = new model.Provider(req.body);

            // save provider
            provider.save().then(function (provider) {
                res.status(200).send(provider.id);

            }).catch(function (err) {
                // Existing username??
                if (err.code === db.errorCodes.DUPLICATED_KEY ) {
                    res.status(409).send("Existing username");
                } else { errorHandler(err, res); }
            })
        }).catch(function () { res.status(404).send("Non existing location"); })
    });

};