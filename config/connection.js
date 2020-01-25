var mysql = require("mysql")
var connection =  mysql.createConnection({
    host:"localhost", 
    PORT:3306,
    user:"developer",
    password:"scooby72",
    database:"burgers_db"
})

connection.connect(function(error){
    console.log("connection id ", connection.threadId)
})

module.exports = connection