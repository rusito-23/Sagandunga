const router = require('express').Router();
const userController = require('../../controllers/userController');
const userAuthController = require('../../controllers/userAuthController');
const auth = require('../auth');

// DELETE
router.post('/delete/:id', userController.delete);

// LOGIN
router.post('/login', userAuthController.login);

module.exports = router;
