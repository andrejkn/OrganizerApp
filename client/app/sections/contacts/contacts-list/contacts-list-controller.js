/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsListCtrl', function(ContactsService) {
    var vm = this;

    vm.deleteContact = function(contact) {
      ContactsService.deleteContact(contact)
        .then(function() {
          vm.contacts = ContactsService.contacts;
        });
    };

    vm.editSingleContact = function(contact) {
      ContactsService.setContactToEdit(contact);
    };

    ContactsService
      .getContacts()
      .then(function() {
        vm.contacts = ContactsService.contacts;
      });
  });