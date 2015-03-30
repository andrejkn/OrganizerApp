/**
 * Created by andrej on 26/02/15.
 */
var path = require('path');

module.exports = {
    security: {
        dbName: 'ascrum', // The name of database that contains the security information
        usersCollection: 'users' // The name of the collection contains user information
    },
    server: {
        listenPort: 8000, // http server port
        securePort: 8433, // https
        distFolder: path.resolve(__dirname, '../client/dist'),
        staticUrl: path.resolve(__dirname, '../client'),
        cookieSecret: 'orgApp'  // The secret for encrypting the cookie
    },
    app: {
        name: 'OrganizerApp',
        version: '1.0',
        apiPath_v1_0: '/api/v1.0'
    },
    db: {
        url: 'mongodb://localhost/organizerapp'
    }
};