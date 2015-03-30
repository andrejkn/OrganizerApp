/**
 * Created by Andrej on 27/03/15.
 */
var express = require('express');
var router = express.Router();
var models = require('../../models');
var helpers = require('../routes-helpers');

var filterContact = function(contactObj) {
  return {
    name: contactObj.name,
    phoneNumber: contactObj.phoneNumber,
    email: contactObj.email
  };
};

router.get('/', function(req, res) {
  models.Contact.getContacts()
    .then(function(contacts) {
      res.json(contacts);
    })
    .then(null,  helpers.makeErrorHandler('Could not GET contact', res));
});

router.put('/', function(req, res) {
  var newContact = filterContact(req.body);
  models.Contact.updateContact(req.body, newContact)
    .then(function(updatedContactCount) {
      res.json({SUCCESS: 'updated ' +  updatedContactCount + ' contact(s)'})
    })
    .then(null,  helpers.makeErrorHandler('Could not UPDATE contact', res));
});

router.post('/', function(req, res) {
  var newContact = filterContact(req.body);
  models.Contact.createContact(newContact)
    .then(function(contactCreated) {
      res.json(contactCreated);
    })
    .then(null, helpers.makeErrorHandler('Could not CREATE contact', res));
});

router.delete('/:id', function(req, res) {
  models.Contact.deleteContact(req.params.id)
    .then(function(deletedContact) {
      res.json(deletedContact);
    })
    .then(null, helpers.makeErrorHandler('Could nod DELETE contact', res));
});

module.exports = router;