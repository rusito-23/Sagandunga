const router = require('express').Router();
const orderController = require('../../controllers/orderController');
const auth = require('../auth');


// GET
router.get('/',
    auth.required,
    orderController.validate.find,
    orderController.find);

// CREATE
router.post('/',
    auth.required,
    orderController.validate.create,
    orderController.create);

// DELIVER
router.post('/deliver/:id',
    auth.required,
    orderController.deliver);

// DELETE
router.post('/delete/:id',
    auth.required,
    orderController.delete);

module.exports = router;
