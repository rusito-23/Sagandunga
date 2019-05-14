
const model = require('../model');

module.exports = function (app) {

    // GET
    app.get('/api/items', (req, res, next) => {
        // filter helpers
        const shouldFilter = req.body.providerUsername;
        const filter = {};
        const query = shouldFilter ?
            { username: req.body.providerUsername } : {};

        // queries
        model.Provider.findOne(query)
            .then(function (provider) {
                if (shouldFilter) { filter.providerId = provider.id }
            }).then(function () {
                return model.Item.find(filter)
            }).then(function (data) {
                // return item
                res.send(data.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        description: item.name,
                        price: item.description,
                        providerId: item.providerId
                    };
                }));
            }).catch(err => next(err))
    });

    // POST
    app.post('/api/items', (req, res, next) => {
        // check if provider exists
        // TODO: no reconoce el error de Malformed Entity
        model.Provider.findOne({ username: req.body.providerUsername })
            .then(function (prov) {
                // create new item with given provider
                req.body.providerId = prov.id;
                const item = new model.Item(req.body);
                // save item
                return item.save();
            }).then(function (item) {
                res.status(200).send(item._id);
            }).catch(function (err) {
                next(err);
            })
    });

    // DELETE
    app.post('/api/items/delete/:id', (req, res, next) => {
        // TODO: check with a token if provider owns the item!
        model.Item.findOne({ _id : req.params.id })
            .then(function (item) {
                item.remove();
                res.status(200).send('OK');
            }).catch(function (err) {
                next(err);
            })
    });

};