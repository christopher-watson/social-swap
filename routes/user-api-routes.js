var db = require("../models");

// routes
module.exports = function (app) {
  // all users
  app.get("/api/users", function (req, res) {
    var query = {};
    if (req.query.userId) {
      query.userId = req.query.userId;
    }

    db.Users.findAll({
      where: query,
      include: [db.Events]
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // one user
  app.get("/api/users/:name", function (req, res) {
    db.Users.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Events]
    }).then(function (dbUsers) {
      console.log(dbUsers);
      res.json(dbUsers);
    });
  });

  // new user
  app.post("/api/users", function (req, res) {
    db.Users.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // delete user
  app.delete("/api/users/:id", function (req, res) {
    db.Users.destroy({
      where: {
        userId: req.params.id
      }
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // update user
  app.put("/api/users", function (req, res) {
    db.Users.update(
      req.body, {
        where: {
          userId: req.body.id
        }
      }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

};