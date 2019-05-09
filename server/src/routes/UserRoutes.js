
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    // DELETE
    app.post('/api/users/delete/:id', function (req, res) {
        // TODO: this id's may be the same?

        model.Consumer.findOne({ _id : req.params.id }).then(function (consumer) {
            consumer.remove();
            res.status(200).send('OK');
        }).catch(function () {
            // if we couldn't find a consumer, search for a provider
            model.Provider.findOne({ _id : req.params.id }).then(function (provider) {
                provider.remove();
                res.status(200).send('OK');
            }).catch(function () {
                // if there isn't a consumer, nor a provider, return 404
                res.status(404).send('User not found');
            })
        })
    })

};