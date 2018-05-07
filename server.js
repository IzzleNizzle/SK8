// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring Models for syncing
var db = require("./models");

// Setting up Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static Directory
app.use(express.static("public"));

// Routes
// **************************************************
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    
  })
})