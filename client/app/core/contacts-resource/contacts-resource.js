/**
 * Created by Andrej on 17/03/15.
 */
angular.module('OrganizerApp.ContactsResource', ['ui.router', 'ngResource', 'OrganizerApp.Constants']);

angular.module('OrganizerApp.ContactsResource')
  .factory('Contacts', function($resource, DB) {
    var dbName = DB.dbName;
    var collectionName = 'contacts';
    var apiKey = DB.apiKey;

    // https://api.mongolab.com/api/1/databases/{database}/collections/{collection}?apiKey=myAPIKey
    var resourceUrl = 'https://api.mongolab.com/api/1/databases/' + dbName + '/collections/' + collectionName + '/:id';
    console.log(resourceUrl);
    return $resource(resourceUrl, {
      apiKey: apiKey,
      id:'@_id.$oid'
    }, {
      update: {method:'PUT', isArray: false},
      delete: {method:'DELETE', isArray: false}
    });
  });
