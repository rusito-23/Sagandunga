const model = require('../../model');
const router = require('express').Router();


// GET
router.get('/', (req, res, next) => {
    model.Location.find({}).select({_id: 0, name: 1, coordX: 1, coordY: 1})
    .then((locs) => {
        res.send(locs);
    }).catch(next)
});

// POST
router.post('/', (req, res, next) => {
    new model.Location(req.body).save()
    .then((loc) => {
        res.status(200).send(loc.id);
    }).catch(next)
});

module.exports = router;
