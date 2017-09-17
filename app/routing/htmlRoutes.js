// Michael Osgood / FriendFinder Application

var path = require("path");

module.exports = function(app) {

    // Route to survey.html file
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // If user is not on a defined path, this will direct them to homepage (home.html)
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

};
