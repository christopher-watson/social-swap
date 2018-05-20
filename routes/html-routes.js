var path = require("path");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/event", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/event.html"));
  });

};
