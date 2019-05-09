
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    // GET
    app.get('/api/consumers', (req, res) => {
        const query = model.Consumer.find({});
        query.exec().then(function (data) {
            res.send(data);
        }).catch(function (err) { errorHandler(err, res); })
    });

    // POST
    app.post('/api/consumers', (req, res) => {
        // check if location exists
        const locQuery = model.Location.findOne({ name: req.body.location });
        locQuery.exec().then(function (loc) {

            // create new consumer
            delete req.body.location;
            req.body.locationId = loc.id;
            const consumer = new model.Consumer(req.body);

            // save consumer
            consumer.save().then(function (consumer) {
                res.status(200).send(consumer.id);

            }).catch(function (err) {
                // Existing username??
                if (err.code === db.errorCodes.DUPLICATED_KEY ) {
                    res.status(409).send("Existing username");
                } else { errorHandler(err, res); }
            })
        }).catch(function (err) { console.log(err); res.status(404).send("Non existing location"); })
    });

};