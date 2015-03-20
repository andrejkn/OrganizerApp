/**
 * Created by Andrej K on 19/03/15.
 */
angular.module('OrganizerApp')
  .controller('ContactsEditFormCtrl', function(ContactsService) {
    var vm = this;

    vm.modifyContact = function(contact) {
      ContactsService.modifyContact(contact);
    }
  });