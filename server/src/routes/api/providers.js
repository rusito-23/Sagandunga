const router = require('express').Router();
const providerController = require('../../controllers/providerController');
const auth = require('../auth');

// GET
router.get('/',
    auth.required,
    providerController.find);

// POST
router.post('/',
    auth.optional,
    providerController.validate.create,
    providerController.create);

module.exports = router;
