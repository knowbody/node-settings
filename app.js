var app = require('express')();
var settings = require('./settings');

var port = settings.app.port;

app.get('/', function(req, res) {
	res.send(settings);
});


app.listen(port);
console.log("Listening on port:", port);
