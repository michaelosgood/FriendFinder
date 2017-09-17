// Michael Osgood / FriendFinder Application

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 4200;

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: true}));

// Parse various different custon JSON types as JSON
app.use(bodyParser.json({type: 'application/*+json'}))

// Parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

// Parse an HTML body into a string
app.use(bodyParser.text({type: 'text/html'}))

// Connects server.js and apiRoutes.js
require("./app/routing/apiRoutes.js")(app);

// Connects server.js and htmlRoutes.js
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});