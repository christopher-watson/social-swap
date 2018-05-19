var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var app = express();

var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});

