const express = require('express');
const router = express.Router();

router.use('/locations',    require('./LocationRoutes'));
router.use('/consumers',    require('./ConsumerRoutes'));
router.use('/providers',    require('./ProviderRoutes'));
router.use('/items',        require('./ItemRoutes'));
router.use('/orders',       require('./OrderRoutes'));
router.use('/users',        require('./UserRoutes'));

module.exports = router;