var express = require ('express');
//var app = express();

var burger =require ('../models/burger.js');

var router = express.Router();

//selectAll
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


//insertOne
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burgerName", "devoured"
    ], [
      req.body.burgerName, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

//still need  insertOne and update One

router.put("/api/burgres/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;



///review https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
