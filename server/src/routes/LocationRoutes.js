
const model = require('../model');
const db = require('../db.js');

module.exports = function(app, errorHandler) {

    // GET
    app.get('/api/locations', (req, res) => {
        const query = model.Location.find({}).select({ _id: 0, name: 1, coordX: 1, coordY: 1});
        query.exec().then(function(data) {
            res.send(data);
        }).catch(function (err) { errorHandler(err, res); })
    });

    // POST
    app.post('/api/locations', (req, res) => {
        const loc = new model.Location(req.body);
        loc.save().then(function(loc) {
            res.status(200).send(loc.id);
        }).catch(function (err) {
            console.log(err);
            if (err.code === db.codes.DUPLICATED_KEY) {
                res.status(409).send('Existing location name');
            } else {
                res.status(400).send('Malformed entity');
            }
        });
    });

};


