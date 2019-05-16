const router = require('express').Router();
const model = require('../../model');

// GET
router.get('/', (req, res, next) => {
    model.Consumer.find({})
    .then((consumers) => {
        res.send(consumers.map(c => {
            return {
                id: c._id,
                username: c.username,
                locationId: c.locationId,
            };
        }));
    }).catch(next)
});

// POST
router.post('/', (req, res, next) => {
    // check if location exists
    model.Location.findOne({name: req.body.location})
    .then((loc) => {
        // create new consumer
        req.body.locationId = loc.id;
        const consumer = new model.Consumer(req.body);
        return consumer.save();
    }).then((consumer) => {
        return res.status(200).send(consumer.id);
    }).catch(next)
});

module.exports = router;
