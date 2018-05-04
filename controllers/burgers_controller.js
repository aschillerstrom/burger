var express = require ('express');
//var app = express();

var burger =require ('../models/burger.js');

var router = express.Router();

router.get('/', function (req, res){
  res.redirect('/index');
})

//selectAll
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


//insertOne
router.post("/burger/create", function(req, res) {
    burger.insertOne(
      
      req.body.burgerName, function() {
      // Send back the ID of the new quote
      res.redirect('/index');
    });
  });

//still need  insertOne and update One

router.put("/burger/eat/:id", function(req, res) {
    
  
    burger.updateOne(req.params.id, function(){
      res.redirect('/index');
    })
      
        // If no rows were changed, then the ID must not exist, so 404
        //return res.status(404).end();
      //} else {
        //res.status(200).end();
      });
  

module.exports = router;



///review https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
