//the connection to mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});
//connection and see if it is connecting
connection.connect(function(err) {
  if (err) {
    console.error("my sql had error connecting: " + err.stack);
    return;
  }

  console.log("mysql is connected as id " + connection.threadId);
});

module.exports = connection;