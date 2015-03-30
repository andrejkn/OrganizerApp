/**
 * Created by Andrej on 27/03/15.
 */
var express = require('express');
var router = express.Router();
var models = require('../../models');

router.get('/', function(req, res) {
  models.Contact.getContacts()
    .then(function(contacts) {
      res.json(contacts);
    });
});

router.get('/:id', function(req, res) {
  //console.log(req);
  models.Contact.getContact(req.body.id)
    .then(function(contact) {
      res.json(contact);
    });
});

router.post('/', function(req, res) {
  var newContact = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  };
  models.Contact.createContact(newContact)
    .then(function(contactCreated) {
      res.json(contactCreated);
    })
    .then(null, function(error) {
      console.log(error);
      res.status('404');
    });
});

module.exports = router;