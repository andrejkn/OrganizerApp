/**
 * Created by Andrej on 17/03/15.
 */
angular.module('OrganizerApp.ContactsResource', ['ui.router', 'ngResource', 'OrganizerApp.Constants']);

angular.module('OrganizerApp.ContactsResource')
  .factory('Contacts', function($resource, DB) {
    var dbName = DB.dbName;
    var collectionName = 'contacts';
    var apiKey = DB.apiKey;

    var resourceUrl = 'http://localhost:8000/contacts/:id';
    return $resource(resourceUrl, {
      update: {method:'PUT', isArray: false},
      delete: {method:'DELETE', isArray: false}
    });
  });
