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

const errorHandler = function (err, res) {
    console.log(err.message);
    res.status(500).send('An error ocurred, please try later');
};

// routes!
require('./routes/LocationRoutes.js')(app);
require('./routes/ConsumerRoutes.js')(app);
require('./routes/ProviderRoutes.js')(app, errorHandler);
require('./routes/UserRoutes.js')(app, errorHandler);
require('./routes/ItemRoutes.js')(app, errorHandler);
require('./routes/OrderRoutes.js')(app, errorHandler);

// error handler
app.use(function (err, req, res, next) {
    if (err.customError) {
        res.status(err.statusCode).send(err.message);
    } else {
        console.error(err);
        res.status(500).send('Internal server error');
    }
    next()
});

// listen!
app.listen(8080, () =>
  console.log('Sagandunga REST - API listening on port 8080!')
);
