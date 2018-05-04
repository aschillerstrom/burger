const orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll (function(result){
            callback(result);
        });
    },
    insertOne: function(burgerName,callback){
        orm.insertOne (burgerName, function(result){
            callback(result);
        });
    },
    updateOne: function(id, callback){
        orm.updateOne (id, function(result){
            callback(result)
        });
    }
    };

    module.exports = burger;