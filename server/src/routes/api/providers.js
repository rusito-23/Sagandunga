const router = require('express').Router();
const providerController = require('../../controllers/providerController');

// GET
router.get('/', providerController.find);

// POST
router.post('/',
    providerController.validate.create,
    providerController.create);

module.exports = router;
