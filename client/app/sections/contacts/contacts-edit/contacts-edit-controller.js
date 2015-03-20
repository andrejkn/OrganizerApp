/**
 * Created by Andrej K on 18/03/15.
 */

angular.module('OrganizerApp')
  .controller('ContactsEditCtrl', function(ContactsService) {
    var vm = this;

    ContactsService
      .getContacts()
      .then(function() {
        vm.contacts = ContactsService.contacts;
      })
  });