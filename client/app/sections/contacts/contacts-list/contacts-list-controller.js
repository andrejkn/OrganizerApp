/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsListCtrl', function($scope, contactsService) {
    var vm = this;
    var flag = true;

    vm.updateContactListView = function (contactToShow) {
      if (!_.isUndefined(contactToShow)) {
        vm.contacts = [contactToShow];
      } else {
        contactsService.getContacts()
          .then(function (contacts) {
            vm.contacts = contacts;
            console.log('update contacts view', vm.contacts);
          });
      }
    };

    vm.deleteContact = function (contact) {
      contactsService.deleteContact(contact)
        .then(function () {
          console.log('Delete UPDATED');
          vm.updateContactListView();
          flag = false;
        });
    };

    vm.modifyContact = function (contact) {
      console.log(contact);
      contactsService.modifyContact(contact)
        .then(function () {
          console.log('Modify UPDATED');
          vm.updateContactListView();
          flag = false;
        });
    };

    // update the contacts list view
    vm.updateContactListView();
  });