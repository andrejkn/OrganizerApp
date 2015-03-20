/**
 * Created by Andrej on 17/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsAddCtrl', function(ContactsService) {
    var vm = this;
    vm.addContact = function() {
      ContactsService.addContact(vm.newContact);
    };
  });