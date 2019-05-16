const router = require('express').Router();
const orderController = require('../../controllers/orderController');

// GET
router.get('/',
    orderController.validate.find,
    orderController.find);

// CREATE
router.post('/',
    orderController.validate.create,
    orderController.create);

// DELIVER
router.post('/deliver/:id', orderController.deliver);

// DELETE
router.post('/delete/:id', orderController.delete);

module.exports = router;
