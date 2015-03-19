/**
 * Created by andrej on 18/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsEditCtrl', function($scope, $timeout, $state, contactsService) {
    var vm = this;

    vm.modifyContact = function (contact) {
      return contactsService.modifyContact(contact)
        .then(function (modifiedContact) {
          return modifiedContact;
        });
    };

    vm.modifyContactAndSwitchState = function (contact, newState) {
      vm.modifyContact(contact)
        .then(function () {
          $state.go(newState);
        });
    };
  });