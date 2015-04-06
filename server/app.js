/**
 * Created by andrej on 21/03/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var app = express();
var port = Number(process.env.PORT || config.server.listenPort);

app.use(bodyParser.json());
app.use(express.static(config.server.staticUrl));
app.use(require('./routes'));

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

