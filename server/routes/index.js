/**
 * Created by Andrej on 27/03/15.
 */

var express = require('express');
var router = express.Router();

//router.use('/users', require('./users'));
router.use('/contacts', require('./contacts'));

module.exports = router;
