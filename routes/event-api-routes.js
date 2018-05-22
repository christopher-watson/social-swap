var db = require("../models");

// routes
module.exports = function (app) {
  //create event
  app.post("/api/events", function (req, res) {
    db.Events.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  //get users
  app.get("/api/events/:id", function (req, res) {
    db.Events.findAll({
      where: {
        code: req.params.id
      },
      // include: [db.Users]
    }).then(function (dbUsers) {
      console.log(dbUsers);
      res.json(dbUsers);
    });
  });

  // delete event
  app.delete("/api/events/:id", function (req, res) {
    db.Users.destroy({
      where: {
        code: req.params.id
      }
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

};