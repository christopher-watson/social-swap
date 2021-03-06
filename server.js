var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

var db = require("./models");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/event-api-routes.js")(app);

db.sequelize.sync({
  // force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port %s", PORT);
  });
});

var dotenv = require('dotenv');
dotenv.load();
// var cloudinary = require("cloudinary");