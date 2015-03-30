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

var createContact = function(contact) {
  return ContactModel.create(contact)
    .then(function(createdContact) {
      return createdContact;
    })
    .then(null, function(error) {
      console.log(error);
      throw new Error('Cannot create contact');
    })
};

var getContacts = function() {
  var query = ContactModel.find({});
  return query.exec()
    .then(function (data) {
      console.dir(data);
      return data;
    })
    .then(null, function(error) {
      console.log(error);
    });
};

var getContact = function(contactId) {
  var query = ContactModel.findOne({id: contactId});
  return query.exec()
    .then(function (data) {
      console.dir(data);
    })
    .then(null, function(error) {
      console.log(error);
    });
};

var updateContact = function(contact, newContact) {

};

var deleteContact = function(contact) {

};

module.exports = {
  createContact: createContact,
  getContacts: getContacts,
  getContact: getContact
};