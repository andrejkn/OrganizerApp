/**
 * Created by Andrej on 17/03/15.
 */
angular.module('underscore', [])
  .factory('_', function() {
    return window._;
  });

angular.module('OrganizerApp', ['ui.router', 'underscore', 'ngResource', 'OrganizerApp.ContactsResource']);

angular.module('OrganizerApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/contacts/list");

    $stateProvider
      .state('contacts', {
        url: "/contacts",
        templateUrl: "/app/sections/contacts/contacts.html"
      })
      .state('contacts.edit', {
        url: "/edit",
        templateUrl: "/app/sections/contacts/contacts-edit/contacts-edit.html"
      })
      .state('contacts.edit-single', {
        url: "/edit-single",
        templateUrl: "/app/sections/contacts/contacts-edit-single/contacts-edit-single.html"
      })
      .state('contacts.list', {
        url: "/list",
        templateUrl: "/app/sections/contacts/contacts-list/contacts-list.html"
      })
      .state('contacts.add', {
        url: "/add",
        templateUrl: "/app/sections/contacts/contacts-add/contacts-add.html"
      });
  });