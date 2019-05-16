const router = require('express').Router();
const consumerController = require('../../controllers/consumerController');

// GET
router.get('/', consumerController.find);

// POST
router.post('/',
    consumerController.validate.createConsumer,
    consumerController.create);

module.exports = router;
