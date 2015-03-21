/**
 * Created by Andrej K on 18/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsEditSingleCtrl', function(ContactsService) {
    var vm = this;
    vm.contacts = [ContactsService.getContactToEdit()];
  });
