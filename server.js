var express = require("express");

var app = express();

var PORT = process.env.Port || 3000;

var middleware = require("./middleware.js");

console.log(middleware);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send("About Us!");
});

app.use(express.static(__dirname + "\\public"));

app.listen(PORT, function() {
	console.log("express server started!");
	console.log("Server running on the port: " + PORT)
});