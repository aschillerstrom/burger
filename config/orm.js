const connection = require('./connection.js');

//selectAll()
//insertOne()
//updateOne()

var orm = {
	//returns all table entries
	selectAll: function(callback) {
		// returns all rows from the target table
		

		// database query
		connection.query('SELECT * FROM burgers', function (err, result) {
			if (err) throw err;
			callback(result);
		  });
			
	},

	//insert a single table entry
	insertOne: function(burgerName, callback) {
		//inserts a single row into table
		connection.query('INSERT INTO burgers SET ?', {
			burgerName: burgerName,
			devoured: false
			
		  }, function (err, result) {
			if (err) throw err;
			callback(result);
		  }); 
       

		
		
	},

	// updates a one entry
	updateOne: function(id, callback) {
		// updates a single entry in table
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
			if (err) throw err;
			callback(result);
	
	    } );  
    }
};


module.exports = orm;