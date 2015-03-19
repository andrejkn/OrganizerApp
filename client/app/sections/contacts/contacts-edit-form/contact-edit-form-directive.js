/**
 * Created by Andrej K on 19/03/15.
 */
angular.module('OrganizerApp')
  .directive('contactsEditForm', function() {
    return {
      restrict: 'E',
      bindToController: true,
      controller: 'ContactsEditFormCtrl',
      controllerAs: 'contactsEditFormCtrl',
      scope: {
        contactsData: '='
      },
      templateUrl: 'app/sections/contacts/contacts-edit-form/contacts-edit-form.html'
    };
  });