var connection = require("./connection")

var orm = {
    selectAll:function(tableName, modelCallback){
       connection.query("SELECT * FROM ?? ", tableName, function(error, data){
           modelCallback(data)
       })
    }
}

module.exports = orm