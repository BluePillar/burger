var orm = require('../config/orm.js')

var burgers = {

    listAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        })
    },

    new: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res)
        })
    },
    
    devour: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res)
        })
    }
}

module.exports = burgers