
const model = require('../model');

module.exports = function(app) {

    // GET
    app.get('/api/locations', (req, res, next) => {
        model.Location.find({}).select({ _id: 0, name: 1, coordX: 1, coordY: 1})
        .then(function(data) {
            res.send(data);
        }).catch(err => next(err))
    });

    // POST
    app.post('/api/locations', (req, res, next) => {
        new model.Location(req.body).save()
        .then(function(loc) {
            res.status(200).send(loc.id);
        }).catch(err => next(err))
    });

};


