/**
 * Created by andrej on 28/03/15.
 */

'use strict';

var mongoose = require('mongoose');
var config = require('../../config');
var contact = require('./contact');

mongoose.connect(config.db.url);

module.exports = {
  Contact: contact
};