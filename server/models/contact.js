/**
 * Created by Andrej on 27/03/15.
 */
var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String},
  phoneNumber: {type: String},
  created: {type: Date, default: Date.now}
}, {collection: 'contacts'});

var ContactModel = mongoose.model('ContactModel', contactSchema);

var makeErrorHandler = function() {
  return function(error) {
    //throw new Error('Error Model: Cannot update contact');
    throw new Error(error.message);
  }
};

var createContact = function(contact) {
  return ContactModel.create(contact)
    .then(function(createdContact) {
      return createdContact;
    })
    .then(null, makeErrorHandler())
};

var getContacts = function() {
  var query = ContactModel.find({});
  return query.exec()
    .then(function (data) {
      return data;
    })
    .then(null, makeErrorHandler());
};


var updateContact = function(contact, newContact) {
  var query = ContactModel.update({_id: contact._id}, newContact);
  return query.exec()
    .then(function(changedContact) {
      return changedContact;
    })
    .then(null, makeErrorHandler());
};

var deleteContact = function(contactId) {
  var query = ContactModel.findOneAndRemove({_id: contactId});
  return query.exec()
    .then(function(deletedContact) {
      console.log('deleting');
      console.log(deletedContact);
      return deletedContact;
    })
    .then(null, makeErrorHandler());
};

module.exports = {
  createContact: createContact,
  getContacts: getContacts,
  updateContact: updateContact,
  deleteContact: deleteContact
};