// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Tells Node that we are creating an "express" server
var app = express();

// Sets an intitial port
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});