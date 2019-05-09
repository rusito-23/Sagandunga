/* EXPRESS CONFIGURATION  */

const express = require('express');
const app = express();

// parser
app.use(express.json());

// route logger!
app.use(function (req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// error handler
const errorHandler = function (err, res) {
    console.log(err);
    res.status(500).send("An error ocurrred, please try again later.");
};

// routes!
require('./Routes/LocationRoutes.js')(app, errorHandler);
require('./Routes/ConsumerRoutes.js')(app, errorHandler);

// listen!
app.listen(8080, () =>
  console.log('Sagandunga REST - API listening on port 8080!')
);
