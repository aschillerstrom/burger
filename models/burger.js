const orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll ('burgers', function(result){
            callback(result);
        });
    },
    insertOne: function(callback){
        orm.insertOne ('burgers', function(result){
            callback(result);
        });
    },
    updateOne: function(callback){
        orm.updateOne ('burgers', function(result){
            callback(result)
        });
    }
    };

    module.exports = burger;