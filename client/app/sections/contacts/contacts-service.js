/**
 * Created by Andrej on 17/03/15.
 */

'use strict';

angular.module('OrganizerApp')
  .factory('ContactsService', ['Contacts', '$log', function(Contacts) {
    var contactsService = {};
    var contactToEdit = null;
    contactsService.contacts = [];


    var makeErrorHandler = function(message) {
      return function(error) {
        console.log('Error: ' + message);
        console.log('Details\n--------------');
        console.log(error);
        console.log('--------------');
      };
    };

    contactsService.findContact = function(focusContact) {
      var index;
      for(index = 0; index < contactsService.contacts.length; index += 1) {
        var singleContact = contactsService.contacts[index];
        if(focusContact['id'] === singleContact['id']) {
          return index;
        }
      }
    };

    contactsService.setContactToEdit = function(contact) {
      contactToEdit = contact;
    };

    contactsService.getContactToEdit = function() {
      return contactToEdit;
    };

    contactsService.getContacts = function() {
      return Contacts.query()
        .$promise
        .then(function(contacts) {
          contactsService.contacts = contacts;
        })
        .then(null, makeErrorHandler());
    };

    contactsService.isValidContact = function(contact) {
      return (!_.isUndefined(contact) &&
      !_.isNull(contact) &&
      contact.hasOwnProperty('name') &&
      contact.hasOwnProperty('email') &&
      contact.hasOwnProperty('phoneNumber'));
    };

    contactsService.addContact = function(contact) {
      return Contacts.save(contact)
        .$promise
        .then(function(savedContact) {
          contactsService.contacts.push(savedContact);
        })
        .then(null, makeErrorHandler('Could not create contact'));
    };

    contactsService.modifyContact = function(focusContact) {
      return focusContact.$update(focusContact)
        .then(function(modifiedContact) {
          var index = contactsService.findContact(focusContact);
          if(!_.isUndefined(index) && index >= 0) {
            contactsService.contacts[index] = modifiedContact;
          }
        })
        .then(null, makeErrorHandler('Could not update contact'));
    };

    contactsService.deleteContact = function(contact) {
      return contact.$delete()
        .then(function(deletedContact) {
          var index = contactsService.findContact(deletedContact);
          if(!_.isUndefined(index) && index >= 0) {
            contactsService.contacts.splice(index, 1);
          }
        })
        .then(null, makeErrorHandler('Could not delete contact'));
    };

    return contactsService;
  }]);