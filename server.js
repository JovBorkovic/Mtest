var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();


app.use(express.static(__dirname + '/public'));

app.listen(8080, function(req, res) {
	console.log("Server is running on port 8080.");
});
