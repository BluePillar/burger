var mysql = require("mysql")

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
})

connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return
  }
  console.log("connected as id " + connection.threadId);
})

module.exports = connection