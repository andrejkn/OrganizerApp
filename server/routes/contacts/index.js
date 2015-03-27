/**
 * Created by Andrej on 27/03/15.
 */
var express = require('express');
var router = express.Router();
var Contact = require('../../models/contact');

router.get('/:id', function(req, res) {
  //Contact.get(req.params.id, function(err, contact) {
  //  res.render('contacts/contact', {contact: contact});
  //});

  res.send('contact id:' + req.params.id);
});

module.exports = router;