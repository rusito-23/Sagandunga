const router = require('express').Router();
const itemController = require('../../controllers/itemController');
const auth = require('../auth');

// GET
router.get('/',
    auth.required,
    itemController.find);

// POST
router.post('/',
    auth.required,
    itemController.validate.create,
    itemController.create);

// DELETE
router.post('/delete/:id',
    auth.required,
    itemController.delete);

module.exports = router;
