// setting package requirements
var express = require("express");
var app = express();
var path = require("path");

// setting port requirements
var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

// include the routes
require("./routes/index.js")(app);


app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});