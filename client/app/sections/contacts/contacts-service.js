/**
 * Created by Andrej on 17/03/15.
 */

'use strict';

angular.module('OrganizerApp')
  .factory('ContactsService', ['Contacts', '$log', function(Contacts, $log) {
    var contactsService = {};
    var contactToEdit = null;
    contactsService.contacts = [];

    contactsService.findContact = function(focusContact) {
      var index;
      for(index = 0; index < contactsService.contacts.length; index += 1) {
        var singleContact = contactsService.contacts[index];
        if(focusContact['_id']['$oid'] === singleContact['_id']['$oid']) {
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
        .then(null, function(error) {
          $log(error);
        });
    };

    contactsService.isValidContact = function(contact) {
      return (!_.isUndefined(contact) &&
      !_.isNull(contact) &&
      contact.hasOwnProperty('name') &&
      contact.hasOwnProperty('email') &&
      contact.hasOwnProperty('phoneNumber'));
    };

    contactsService.addContact = function(contact) {
      if( !contactsService.isValidContact(contact) ) {
        throw new Error('Error: Trying to add an invalid contact');
      }

      return Contacts.save(contact)
        .$promise
        .then(function(savedContact) {
          contactsService.contacts.push(savedContact);
        })
        .then(null, function(error) {
          console.log(error);
          throw new Error('Could not save contact');
        });
    };

    contactsService.modifyContact = function(focusContact) {
      return focusContact.$update(focusContact)
        .then(function(modifiedContact) {
          var index = contactsService.findContact(focusContact);
          if(index) {
            contactsService.contacts[index] = modifiedContact;
          }
        })
        .then(null, function() {
          console.log('Could not update contact');
        });
    };

    contactsService.deleteContact = function(contact) {
      return contact.$delete()
        .then(function(deletedContact) {
          var index = contactsService.findContact(deletedContact);
          if(index) {
            contactsService.contacts.splice(index, 1);
          }
        })
        .then(null, function() {
          // NEED TO HANDLE ERROR
          console.log('Cannot delete contact ...');
        });
    };

    return contactsService;
  }]);