
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    // DELETE
    app.post('/api/users/delete/:id', function (req, res) {
        model.User.findOne( { _id: req.params.id }).then(function (user) {
            user.remove();
            res.status(200).send('OK');
        }).catch(function () {
            res.status(404).send('Non existing user');
        })
    })

};