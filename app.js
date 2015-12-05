"use strict"
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
// socket.io IO-control module server      
var TCPmodule = require("./routes/IOControlServer.js").server(io);
// device control API handler 
var deviceAPI = require("./routes/route.js").routeHandler(app);
var port = 3000;
app.use(express.static(__dirname + "/public"));
// index.html container
app.use(express.static(__dirname + "/SPA"));

http.listen( port, function(){
  console.log("WebControl http server listening on: " + port);
});
