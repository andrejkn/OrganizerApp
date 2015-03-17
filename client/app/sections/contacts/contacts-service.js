/**
 * Created by aknezevs on 17/03/15.
 */
angular.module('OrganizerApp')
  .factory('contactsService', ['Contacts', function(Contacts) {
    var contactsService = {};

    contactsService.getContacts = function() {
      var contacts = Contacts.query()
        .$promise
        .then(function(result) {
          return result;
        });
      return contacts;
    };

    contactsService.isValidContact = function(contact) {
      return (!_.isUndefined(contact) &&
      !_.isNull(contact) &&
      contact.hasOwnProperty('name') &&
      contact.hasOwnProperty('phoneNumber'));
    };

    contactsService.addContact = function(contact) {
      if( !contactsService.isValidContact(contact) ) {
        throw new Error('Error: Trying to add an invalid contact');
      }
      Contacts.save(contact);
    };

    contactsService.modifyContact = function(contact) {
      return contact.$update({name: contact.name, phoneNumber: contact.phoneNumber})
        .then(function(modifiedContact) {
          return modifiedContact;
        })
        .then(null, function(error) {
          console.log(error);
          throw new Error('Could not update contact');
        });
    };

    contactsService.deleteContact = function(contact) {
      return contact.$delete()
        .then(function(res) {
          return res;
        })
        .then(null, function(error) {
          console.log(error);
          throw new Error('Could not delete contact');
        });
    };

    return contactsService;
  }]);