var express = require('express')

//Imports our burgers.js model:
var burgers = require('../models/burger.js')

var router = express.Router()

//Create all our RESTful routes
// router.get("/", function (req, res) {
//     res.redirect("/index")
//   })
  
router.get("/index", function (req, res) {

    burgers.listAll(function (data) {
        var hbsObject = {
        burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject);

    })

})
  
router.post("/burgers/new", function (req, res) {
    
    burgers.new(req.body.burger_name, function (result) {
        res.redirect("/index")
    })
})
  
router.post("/burgers/devour/:id", function (req, res) {
  
    burgers.devour(req.params.id, function (result) {
        
        res.redirect("/index")
  
    })
  
})
  
  module.exports = router