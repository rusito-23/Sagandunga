const router = require('express').Router();
const locationController = require('../../controllers/locationController');
const auth = require('../auth');

// GET
router.get('/',
    auth.optional,
    locationController.find);

// POST
router.post('/',
    auth.optional,
    locationController.validate.create,
    locationController.create);

module.exports = router;
