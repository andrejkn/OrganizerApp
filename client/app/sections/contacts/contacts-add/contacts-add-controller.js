/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsAddCtrl', function(contactsService, $state) {
    var vm = this;
    vm.addContact = function () {
      if(contactsService.isValidContact(vm.newContact)) {

        return contactsService.addContact(vm.newContact)
          .then(function(addedContact) {
            console.log('Added new contact ' + addedContact.name);
            return addedContact;
          })
          .then(null, function() {
            var errMsg = 'Could not add contact ' + vm.newContact.name;
            console.log(errMsg);
            throw new Error(errMsg);
          });
      } else {
        console.log('Cannot add contact');
      }
    };

    vm.saveAndSwitchState = function(newState) {
      vm.addContact()
        .then(function(addedContact) {
          console.log('Saving ' + addedContact.name);
          $state.go(newState);
        });
    }
  });