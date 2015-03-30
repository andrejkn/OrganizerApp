/**
 * Created by andrej on 21/03/15.
 */
var express = require('express');

var routes = require('./routes');
var config = require('../config');

var bodyParser = require('body-parser');

var port = Number(process.env.PORT || config.server.listenPort);

var app = express();

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(config.server.staticUrl));
app.use(routes);

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

