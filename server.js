var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sets up the handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//lets this page go somewhere :)
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);







//ADD STATIC PUBLIC



//access the port
app.listen(port, () =>{
    console.log ('listening on port 3000');
});
