const model = require('../../model');
const router = require('express').Router();

// GET
router.get('/', (req, res, next) => {
    // filter helpers
    const shouldFilter = req.body.providerUsername;
    const filter = {};
    const query = shouldFilter ?
        {username: req.body.providerUsername} : {};

    // queries
    model.Provider.findOne(query)
    .then((provider) => {
        if (shouldFilter) {
            filter.providerId = provider.id
        }
    }).then(() => {
        return model.Item.find(filter)
    }).then((data) => {
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
    }).catch(next)
});

// POST
router.post('/', (req, res, next) => {
    // check if provider exists
    // TODO: no reconoce el error de Malformed Entity
    model.Provider.findOne({username: req.body.providerUsername})
    .then((prov) => {
        // create new item with given provider
        req.body.providerId = prov.id;
        const item = new model.Item(req.body);
        // save item
        return item.save();
    }).then((item) => {
        res.status(200).send(item._id);
    }).catch(next)
});

// DELETE
router.post('/delete/:id', (req, res, next) => {
    // TODO: check with a token if provider owns the item!
    model.Item.findOne({_id: req.params.id})
    .then((item) => {
        item.remove();
        res.status(200).send('OK');
    }).catch(next)
});

module.exports = router;
