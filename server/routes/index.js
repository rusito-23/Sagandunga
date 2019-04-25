var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

let global = 'No hay nada';

function collectRequestData(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(parse(body));
    });
}

// TODO:manage db connection errors
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    // db connection successfully
    router.get('/', function (req, res, next) {
        res.send(global);
    });

    router.post('/', function (req, res, next) {

        collectRequestData(req, function (data) {
            global = data;
        })
    });

});


module.exports = router;
