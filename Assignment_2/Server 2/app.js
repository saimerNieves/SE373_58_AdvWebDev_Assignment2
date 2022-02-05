const express = require("express")
const expressFunctions = express();

const path = require("path") //import path library 

const hbs = require("hbs"); // import hbs library

// hbs.registerPartials(__dirname + "/views_pages/partials")

expressFunctions.use(express.urlencoded());

//static routes any file inside here we will have access to this
expressFunctions.use(express.static(__dirname+"/views_pages")) //any files here we will have access to

expressFunctions.set("view engine", "hbs");

const port = 3003;


expressFunctions.use(function(req, res) {

    //console.log("Received request for: " + req.url, req);

    
    //views will have pages to rout us for html pages

    //when you get this route call this functoin
    //expressFunctions.get("/", function(req, res){




    //})

    //when you get this route call this functoin
    //expressFunctions.get( "/about", function(req, res){
        if(req.url == "/about"){
            res.render(__dirname + "/views_pages/about.hbs")
        }
    //})

    //when you get this route call this functoin
    //expressFunctions.get( "/form", function(req, res){
        else if(req.url == "/form"){
            res.render(__dirname + "/views_pages/form.hbs", {junk:"form page", stuff:10})
        }
    //})


    //expressFunctions.post('/results', function (req, res) {
        else if(req.url == "/results"){
        // res.send(req.body.name);
            res.render(__dirname + "/views_pages/results.hbs", {name:req.body["name"], email:req.body["email"], message:req.body["message"]})
            console.log('Info From Form -> : ' + JSON.stringify(req.body));

        }
    //});

        else {

                res.render(__dirname + "/views_pages/index.hbs")

        }




});


//listener to listen to this event

expressFunctions.listen(port, function(){
    console.log("connected at port: " + port);
})