const router = require('express').Router();
const User = require('../db/models/user');

router.use('/users', require('./users'))

module.exports = router;