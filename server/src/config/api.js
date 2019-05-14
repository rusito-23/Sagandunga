/* EXPRESS CONFIGURATION  */

const express = require('express');
const app = express();

module.exports = function () {
    // parser
    app.use(express.json());

    // route logger!
    app.use(function (req, res, next) {
        console.log(`${new Date().toLocaleString()} :: ${req.method} ----- ${req.originalUrl}`);
        next();
    });

    const errorHandler = function (err, res) {
        console.log(err.message);
        res.status(500).send('An error ocurred, please try later');
    };

    // Load routes!
    require('../routes/LocationRoutes.js')(app);
    require('../routes/ConsumerRoutes.js')(app);
    require('../routes/ProviderRoutes.js')(app);
    require('../routes/UserRoutes.js')(app);
    require('../routes/ItemRoutes.js')(app);
    require('../routes/OrderRoutes.js')(app, errorHandler);

    // Load passport configuration
    require('./passport.js');

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
        console.log('Sagandunga SERVER listening on port 8080!')
    );
};


