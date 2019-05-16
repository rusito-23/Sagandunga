const router = require('express').Router();
const userController = require('../../controllers/userController');

// DELETE
router.post('/delete/:id', userController.delete);

module.exports = router;
