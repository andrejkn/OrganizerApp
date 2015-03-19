/**
 * Created by andrej on 18/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsEditCtrl', function($scope, $timeout, $state, contactsService) {
    var vm = this;
    vm.updateContactListView = function (contactToShow, newView) {
      if (!_.isUndefined(contactToShow)) {
        vm.contacts = [contactToShow];
      } else {
        contactsService.getContacts()
          .then(function (contacts) {
            return contacts;
          })
          .then(function(updatedContacts) {
            vm.contacts = updatedContacts;
            console.log('update contacts view', vm.contacts);
          });
      }
      if(!_.isUndefined(newView)) {
        $state.go(newView);
      }
    };

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

    vm.updateContactListView();
  });