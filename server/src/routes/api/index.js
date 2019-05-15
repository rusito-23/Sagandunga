const express = require('express');
const router = express.Router();

router.use('/locations',    require('./locations'));
router.use('/consumers',    require('./consumers'));
router.use('/providers',    require('./providers'));
router.use('/items',        require('./items'));
router.use('/orders',       require('./orders'));
router.use('/users',        require('./users'));

module.exports = router;