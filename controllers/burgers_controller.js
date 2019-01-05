var express = require("express");
var db = require("./../models");
var router = express.Router();

// Create all routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create(req.body).then(function (data) {
    res.json(data);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data){
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }) 
  });

// Export routes for server.js to use.
module.exports = router;