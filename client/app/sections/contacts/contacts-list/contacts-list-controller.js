/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsListCtrl', function($scope, $timeout, $state, contactsService) {
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
            console.log('Update contacts view', vm.contacts);
          });
      }
      if(!_.isUndefined(newView)) {
        $state.go(newView);
      }
    };

    // update the contacts list view
    vm.updateContactListView();

    vm.deleteContact = function (contact) {
      return contactsService.deleteContact(contact)
        .then(function (deletedContact) {
          console.log('Deleted ' + deletedContact.name);
          return deletedContact;
        });
    };

    vm.deleteContactAndSwitchState = function(contact, newState) {
      vm.deleteContact(contact)
        .then(function() {
          contactsService.getContacts()
            .then(function (contacts) {
              vm.contacts = contacts;
            });
          $state.go(newState);
        })
    };

    vm.editSingleContact = function(contact, newState) {
      contactsService.setContactToEdit(contact);
      $state.go(newState);
    };

  });