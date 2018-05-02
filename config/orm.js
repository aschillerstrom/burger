const connection = require('./connection.js');

//selectAll()
//insertOne()
//updateOne()

var orm = {
	//returns all table entries
	selectAll: function(tableInput, callback) {
		// returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			//results in callback
			callback(result);
		});
	},

	//insert a single table entry
	insertOne: function(tableInput, column, burgerInput, callback) {
		//inserts a single row into table
		var queryString = 'INSERT INTO ' + tableInput + '(' + column + ') VALUES (?)';
        //database query
        connection.query(queryString, burgerInput, function(err, result){
             if(err) throw err;
                callback(result);
        });

		
		
	},

	// updates a one entry
	updateOne: function(tableInput, col, condition, conditionVal, callback) {
		// updates a single entry in table
		var queryString = 'UPDATE ' + tableInput + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
        //same db query
        connection.query(queryString, [colVal, conditionVal], function(err, result){
            if(err) throw err;
            callback(result);	
	    } );  
    }
};


module.exports = orm;