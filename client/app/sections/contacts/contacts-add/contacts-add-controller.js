/**
 * Created by aknezevs on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactAddCtrl', function(contactsService, Contacts) {
    var vm = this;
    vm.addContact = function () {
      if(contactsService.isValidContact(vm.newContact)) {
        console.log('Adding new contact ' + vm.newContact.name);
        contactsService.addContact(vm.newContact, Contacts);
      } else {
        console.log('Cannot add contact');
      }
    };
  });