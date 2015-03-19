/**
 * Created by Andrej K on 18/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsEditSingleCtrl', function(contactsService) {
    var vm = this;

    vm.singleEdit = function () {
      var contact = contactsService.getContactToEdit();
      vm.contacts = [contact];
    };
  });