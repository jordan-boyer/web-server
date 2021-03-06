var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send("About Us!");
});

var dirname = process.env.PORT ? __dirname + "/public" : __dirname + "\\public"
console.log(dirname);

app.use(express.static(dirname));

app.listen(PORT, function() {
	console.log("express server started!");
	console.log("Server running on the port: " + PORT)
});