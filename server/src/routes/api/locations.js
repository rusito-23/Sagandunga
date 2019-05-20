const router = require('express').Router();
const locationController = require('../../controllers/locationController');
const auth = require("../auth");

// GET
router.get('/',
    auth.required,
    locationController.find);

// POST
router.post('/',
    auth.required,
    locationController.validate.create,
    locationController.create);

module.exports = router;
