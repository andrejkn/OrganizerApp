/**
 * Created by aknezevs on 17/03/15.
 */
angular.module('underscore', [])
  .factory('_', function() {
    return window._;
  });

angular.module('OrganizerApp', ['ui.router', 'underscore', 'ngResource', 'OrganizerApp.ContactsResource']);

angular.module('OrganizerApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/contacts");

    $stateProvider
      .state('contacts', {
        url: "/contacts",
        templateUrl: "partials/contacts.template.html"
      })
      .state('contacts.edit', {
        url: "/edit",
        templateUrl: "sections/contacts/contacts-edit/contacts-edit.html"
      })
      .state('contacts.list', {
        url: "/list",
        templateUrl: "sections/contacts/contacts-list/contacts-list.html"
      })
      .state('contacts.add', {
        url: "/add",
        templateUrl: "sections/contacts/contacts-add/contacts-add.html"
      });
  });