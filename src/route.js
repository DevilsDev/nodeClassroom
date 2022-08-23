//Declaring an express variable and giving it the node.js inbuilt function require to import and cache the express module
var express = require('express')

//Declaring an http variable and giving it the same require function to import and cache the http module, can be updated to https later
var http = require ('http')

//Declaring an app variable and giving it the express() function to call to generate an express application
var app = express()

//using express module use method with request and response object parameters to request url and respond "Hellow World!"
app.use(function(req, res) {
    console.log("req incoming: " + req.url)
    res.end("Hello World!")
})

// Method that creates a http server when the app function is called. The .listen method creates a listener on the specified port or path.
http.createServer(app).listen(8080)