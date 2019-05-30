const router = require('express').Router();
const consumerController = require('../../controllers/consumerController');
const auth = require('../auth');

// FIND
router.get('/',
    auth.required,
    consumerController.find);

// CREATE
router.post('/',
    auth.optional,
    consumerController.validate.createConsumer,
    consumerController.create);

// DEPOSIT
router.post('/deposit',
    auth.required,
    consumerController.validate.deposit,
    consumerController.deposit);

module.exports = router;
