const express = require('express');
const db = require('./config/db.js');

// Configuration
const app = express();
app.use(express.json());

// Route logger!
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} :: ${req.method} ----- ${req.originalUrl}`);
    next();
});

// Load models
require('./model');

// Load passport configuration
require('./config/passport.js');

// Load routes
app.use(require('./routes'));

// Error handler
app.use((err, req, res, next) => {
    if (err.customError) {
        res.status(err.statusCode).send(err.message);
    } else {
        console.error(err);
        res.status(500).send('Internal server error');
    }
    next()
});

// Start server
Promise.all([db.connect(), app.listen(8080)])
    .then(() => {
        console.log('Sagandunga SERVER - Listening on port 8080!')
    }).catch(err => console.log(err));

