const router = require('express').Router();
const locationController = require('../../controllers/locationController');

// GET
router.get('/', locationController.find);

// POST
router.post('/',
    locationController.validate.create,
    locationController.create);

module.exports = router;
