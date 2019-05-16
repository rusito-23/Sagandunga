const router = require('express').Router();
const itemController = require('../../controllers/itemController');

// GET
router.get('/', itemController.find);

// POST
router.post('/',
    itemController.validate.create,
    itemController.create);

// DELETE
router.post('/delete/:id', itemController.delete);

module.exports = router;
