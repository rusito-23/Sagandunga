
const model = require('../model');
const mongoose = require('mongoose');

module.exports = function (app) {

    // DELETE
    app.post('/api/users/delete/:id', (req, res, next) => {
        model.User.findOneAndDelete({ _id: mongoose.Schema.ObjectId(req.params.id) })
            .then(function () {
                res.send('OK');
            }).catch(err => next(err))
    })

};