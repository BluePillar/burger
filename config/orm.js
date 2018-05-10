// Import MySQL connection:
var connection = require("../config/connection.js")

var orm = {    
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err
            cb (result)
        })
    },
    insertOne: function (burgerEntry, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE ?";
        connection.query(queryString, [burgerEntry], function (err, result) {
            if (err) throw err
            cb (result)
        })
    },
    updateOne: function (tburgerId, cb) {
        var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
        connection.query(queryString, [burgerId], function (err, result) {
            if (err) throw err
            cb (result)
        })
    }
}

module.exports = orm