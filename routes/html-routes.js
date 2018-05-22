var path = require("path");
var db = require("../models");

// routes
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/users", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/event.html"));
  });

};