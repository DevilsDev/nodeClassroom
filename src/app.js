//requiring access to FileSystem module and assigning it to variable fs
var fs = require("fs")
// translating any unicode character to a matching binary string 
var options = {encoding: "utf-8"}
fs.readFile("myfile.text", options, function(err,data) {
    // Declaring an if statement that we will use to check for errors, if no error is returned then the result will be null
    if(err) {
        //If err is returned we will console log an error message
        console.error("Error reading file!")
        //Return to finish our If statement
        return
    }
    //prints number of "x" from the myfile.text 
    console.log(data.match(/x/gi).length + "letter x")
})

///////////////////////////////////////////////////////////////////////////////////////

//requiring access to the http module and assigning it to variable http, https module is identical to http module
var http = require('http')
// function that uses the req and res objects as parameter's to request the HTTP properties for the HTTP headers for the express app sends when requested
function requestHandler(req, res) {
    // printing the incoming request
    console.log("Req incoming : " + req.url)
    // res.end ends the function and prints "Hello World"
    res.end("Hello World!")
}

//Creating a variable called server, then using the http createServer method to create an HTTP Server Object, passing it our requestHandler
var server = http.createServer(requestHandler)

//Server will listen(inbuilt method) on port 3000 (http://localhost:3000)
server.listen(3000)