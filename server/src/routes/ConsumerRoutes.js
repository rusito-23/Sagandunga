
const model = require('../model');
const db = require('../db.js');
const custom = require('../custom.js');

module.exports = function (app) {

    // GET
    app.get('/api/consumers', (req, res, next) => {
        model.Consumer.find({})
            .then(function (consumers) {
                res.send(consumers.map( c => {
                    const consumer = {};
                    consumer.id = c._id;
                    consumer.username = c.username;
                    consumer.locationId = c.locationId;
                    return consumer;
                }));
            }).catch(err => next(err))
    });

    // POST
    app.post('/api/consumers', (req, res, next) => {
        // check if location exists
        model.Location.findOne({name: req.body.location})
            .then(function (loc) {
                // create new consumer
                req.body.locationId = loc.id;
                const consumer = new model.Consumer(req.body);
                return consumer.save();
            }).then(function (consumer) {
                return res.status(200).send(consumer.id);
            }).catch(err => next(err))
    });

};