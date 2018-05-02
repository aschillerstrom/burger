var express = require ('express');
//var app = express();

var burger =require ('../models/burger.js');

var router = express.Router();

router.get('/', function(res, req) {
    var burgerData = {
        bgrData = []
    };

    burger.selectAll(function(results){
        for(var i=0;i<results.length; i++){
            burgerData.bgrData.push(results[i]);
        res.render('index',burgerData)
    };
});
}); 

router.get('/', function(res, req) {
    var burgerData = {
        bgrData = []
    };

    burger.insertOne(function(results){
        for(var i=0;i<results.length; i++){
            burgerData.bgrData.push(results[i]);
        res.render('index',burgerData)
    };
});
}); 

router.get('/', function(res, req) {
    var burgerData = {
        bgrData = []
    };

    burger.updateOne(function(results){
        for(var i=0;i<results.length; i++){
            burgerData.bgrData.push(results[i]);
        res.render('index',burgerData)
    };
});
}); 

//still need  insertOne and update One

module.exports = router;



///review https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
