
var http = require('http');
var mongoose = require('mongoose')
var model = require('./model/Model.js')

// SETUP MONGO
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Sagandunga')
    .then(res => console.log("Connected to DB"))
    .catch(err => console.log(err))


// SERVER START
http.createServer(function (request, response) {

    // response content
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // url listener

}).listen(8080);


console.log("Server running on http://localhost:8080!")

