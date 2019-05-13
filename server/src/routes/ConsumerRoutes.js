
const model = require('../model');
const db = require('../db.js');

module.exports = function (app) {

    // GET
    app.get('/api/consumers', (req, res, next) => {
        model.Consumer.find({}).then(function (data) {
            res.send(data);
        }).catch(function (err) {
            next(err);
        })
    });

    // POST
    app.post('/api/consumers', (req, res, next) => {
        // check if location exists
        model.Location.findOne({name: req.body.location})
            .then(function (loc) {
                if (!loc) { throw db.Error.NonExisting('Non existing location'); }

                // create new consumer
                delete req.body.location;
                req.body.locationId = loc.id;
                const consumer = new model.Consumer(req.body);

                // save consumer
                return consumer.save();
            }).then(function (consumer) {
                return res.status(200).send(consumer.id);
            }).catch(function (err) {
                if (err.code === db.codes.DUPLICATED_KEY)
                    err = db.Error.Existing('Existing consumer');
                next(err);
            });
    });

};