
const model = require('../model');
const db = require('../db.js');

module.exports = function (app, errorHandler) {

    const getItemsByProvider = function (filter, res) {
        const query = model.Item.find(filter);
        query.exec().then(function (data) {
            res.send(data);
        }).catch(function (err) { errorHandler(err, res); })
    };

    // GET
    app.get('/api/items', (req, res) => {
        if (req.body.providerUsername) {

            // check if provider exists
            const providerQuery = model.Provider.findOne({ username: req.body.providerUsername });
            providerQuery.exec().then(function (provider) {

                // filter by providerId
                getItemsByProvider({providerId: provider.id}, res);

            }).catch(function () {
                // 404: Non existing provider
                res.status(404).send('Non existing provider');
            })
        } else {
            getItemsByProvider({}, res);
        }
    });

    // POST
    app.post('/api/items', (req, res) => {
        // check if provider exists
        const provQuery = model.Provider.findOne({ username: req.body.providerUsername });
        provQuery .exec().then(function (prov) {

            // create new item with given provider
            delete req.body.providerUsername;
            req.body.providerId = prov.id;
            const item = new model.Item(req.body);

            // save item
            item.save().then(function (item) {
                res.status(200).send(item.id);

            }).catch(function (err) {
                if (err.code === db.codes.DUPLICATED_KEY ) {
                    res.status(409).send('Existing item for provider');
                } else { errorHandler(err, res); }
            })
        }).catch(function () { res.status(404).send('Non existing provider'); })
    });

    // DELETE
    app.post('/api/items/delete/:id', (req, res) => {
        // TODO: check with a token if provider owns the item!
        model.Item.findOne({ _id : req.params.id }).then(function (item) {
            item.remove();
            res.status(200).send('OK');
        }).catch(function (err) {
            res.status(404).send('Non existing item');
        })
    });

};