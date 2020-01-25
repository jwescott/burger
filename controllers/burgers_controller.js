var burger = require("../models/burger");

function burger_controller(app){

    app.get("/", function(req,res){

      burger.selectAll(function(data){
          res.render("index", {burgers:data})
      })

    })
}

module.exports = burger_controller
