/**
 * Created by andrej on 17/03/15.
 */
angular.module('OrganizerApp')
  .controller('ContactsCtrl', function($state, contactsService) {
    var vm = this;

    vm.isActive = function(state) {
      if( $state.is(state) ) {
        return 'active';
      }
    };

    vm.switchState = function(newState) {
      $state.go(newState);
    };
  });