var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars",  exphbs({defaultLayout:"main"}));

app.set("view engine","handlebars");

//INTERPRETER interprets the user information to json
//json information is stored in req.body

app.use(express.urlencoded({extended:true}));

app.use(express.json());

//

var controller = require("./controllers/burgers_controller")
controller(app)

app.use(express.static("public"));

//app listener puts server online

app.listen(PORT, function(){
    console.log("We are online! http://localhost:" + PORT)
})

//