/*
 * REST API
 * */

const express = require('express');
const model = require('./model/Model.js');
const db = require('./db.js');

const app = express();
// parser
app.use(express.json());

/*
 * METHOD HANDLING
 * */

// LOCATION

app.get('/api/locations', (req, res) => {
    model.Location.find({}, function(err, data) {
        res.send(data);
    })
});

app.post('/api/locations', (req, res) => {
    const loc = new model.Location(req.body);
    loc.save().then(function() {
        res.status(200).send('OK');
    }).catch(function (err) {
        console.log(err);
        if (err.code === db.errorCodes.DUPLICATED_KEY) {
            res.status(409).send('Existing location name');
        } else {
            res.status(400).send('Malformed entity');
        }
    });
});


/*
 * GENERAL CONFIGURATION
 * */

// error handling
app.use(function(err, req, res) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// listener
app.listen(8080, () =>
  console.log('Sagandunga REST - API listening on port 8080!')
);

