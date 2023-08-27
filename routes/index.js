const router = require('express').Router();

router.use('/cats', require('./cats'));

module.exports = router;
