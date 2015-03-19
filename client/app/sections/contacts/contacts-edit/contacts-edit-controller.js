/**
 * Created by Andrej K on 18/03/15.
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

    // update the contacts list view
    //vm.updateContactListView();
  });