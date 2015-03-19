/**
 * Created by Andrej K on 19/03/15.
 */
angular.module('OrganizerApp')
  .controller('ContactsEditFormCtrl', function($state, contactsService) {
    var vm = this;

    vm.modifyContact = function(contact) {
      return contactsService.modifyContact(contact)
        .then(function (modifiedContact) {
          return modifiedContact;
        });
    };

    vm.modifyContactAndSwitchState = function(contact, newState) {
      vm.modifyContact(contact)
        .then(function(modifiedContact) {
          console.log('Modified contact ' + modifiedContact.name);
          $state.go(newState);
        });
    };
  });