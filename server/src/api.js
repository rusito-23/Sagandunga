/*
 * REST API
 * */

const express = require('express');
const model = require('./model/Model.js');
const db = require('./db.js');

const app = express();
/*
 * GENERAL CONFIGURATION
 * */

// parser
app.use(express.json());

// route logger!
app.use(function (req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

/*
 * METHOD HANDLING
 * */

// LOCATION

app.get('/api/locations', (req, res) => {
    const query = model.Location.find({}).select({ _id: 0, name: 1, coordX: 1, coordY: 1});
    query.exec().then(function(data) {
        res.send(data);
    }).catch(function (err) { errorHandler(err, res); })
});

app.post('/api/locations', (req, res) => {
    const loc = new model.Location(req.body);
    loc.save().then(function(loc) {
        res.status(200).send(loc.id);
    }).catch(function (err) {
        console.log(err);
        if (err.code === db.errorCodes.DUPLICATED_KEY) {
            res.status(409).send('Existing location name');
        } else {
            res.status(400).send('Malformed entity');
        }
    });
});

// LISTENER
app.listen(8080, () =>
  console.log('Sagandunga REST - API listening on port 8080!')
);

const errorHandler = function (err, res) {
    console.log(err);
    res.status(500).send("An error ocurrred, please try again later.");
};
