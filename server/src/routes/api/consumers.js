const router = require('express').Router();
const consumerController = require('../../controllers/consumerController');

// FIND
router.get('/', consumerController.find);

// CREATE
router.post('/',
    consumerController.validate.createConsumer,
    consumerController.create);

// DEPOSIT
router.post('/deposit',
    consumerController.validate.deposit,
    consumerController.deposit);

module.exports = router;
