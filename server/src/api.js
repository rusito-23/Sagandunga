/*
 * REST API
 * */

const express = require('express');
const model = require('./model/Model.js');

const app = express();

/*
 * METHOD HANDLING
 * */

app.get('/api/', (req, res) => {
    return res.send('Received a GET HTTP method!')
});

// LOCATION

app.get('/api/locations', (req, res) => {
    model.Location.find({}, function(err, data) {
        res.send(data);
    })
});

app.post('/api/locations', (req, res) => {
    const loc = new model.Location(req.body);
    console.log(req.body);
    // loc.save(function (err) {
    //     if (err) {
    //         res.status(400).send("Error creating location");
    //     } else {
    //         res.status(200).send('OK');
    //     }
    // })
    res.status(200).send('OK');
});


/*
 * GENERAL CONFIGURATION
 * */

// error handling
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// parser
app.use(express.json());

// listener
app.listen(8080, () =>
  console.log('Sagandunga REST - API listening on port 8080!')
);

