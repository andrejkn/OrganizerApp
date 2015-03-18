/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsAddCtrl', function(contactsService, $state, $timeout) {
    var vm = this;
    vm.addContact = function () {
      if(contactsService.isValidContact(vm.newContact)) {
        console.log('Adding new contact ' + vm.newContact.name);
        contactsService.addContact(vm.newContact);
      } else {
        console.log('Cannot add contact');
      }
    };

    vm.switchState = function(newState) {
      $state.go(newState);
    };

    vm.saveAndSwitchState = function(newState) {
      vm.addContact();
      $timeout(function() {
        vm.switchState(newState);
      }, 3000);

    }
  });