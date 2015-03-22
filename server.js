/**
 * Created by andrej on 21/03/15.
 */
var port = Number(process.env.PORT || 8000);
var express = require('express');
var app = express();

var appDir = __dirname + '/client';

app.use(express.static(appDir));
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

