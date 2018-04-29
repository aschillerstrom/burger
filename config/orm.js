const connection = require('./connection.js');

//selectAll()
//insertOne()
//updateOne()

var orm = {
	//returns all table entries
	selectAll: function(table, callback) {
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
	insertOne: function(table, column, burgerInput, callback) {
		//inserts a single row into table
		var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';
        //database query
        connection.query(queryString, [burgerInput], function(err, data){
             if(err) throw err;
                callback(data);
        });

		
		
	},

	// updates a one entry
	updateOne: function(table, col, condition, conditionVal, callback) {
		// updates a single entry in table
		var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
        //same db query
        connection.query(queryString, [colVal, conditionVal], function(err, data){
            if(err) throw err;
            callback(data);	
	    } );  
    }
};


module.exports = orm;