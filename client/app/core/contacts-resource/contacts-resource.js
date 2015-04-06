/**
 * Created by Andrej on 17/03/15.
 */

'use strict';

angular.module('OrganizerApp.ContactsResource', ['ui.router', 'ngResource', 'OrganizerApp.Constants']);

angular.module('OrganizerApp.ContactsResource')
  .factory('Contacts', function($resource) {
    var collectionName = 'contacts';

    var resourceUrl = 'http://localhost:8000/' + collectionName + '/:id';
    console.log(resourceUrl);
    return $resource(resourceUrl, null, {
      update: {
        method:'PUT',
        data: {},
        isArray: false
      },
      delete: {
        method:'DELETE',
        params: {
          id:'@_id'
        },
        isArray: false
      }
    });
  });
