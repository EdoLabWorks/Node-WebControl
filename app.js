'strict'
var express = require('express');
var app = express();
var net = require('net');

/***************************
-o-   socket io setup   -o-      
****************************/
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
// folder for static index.html
app.use(express.static(__dirname + '/controlSPA'));


// This server will handle events from the remote I/O Module 
/*********************************
-o-   socket.io server setup   -o-      
**********************************/
var port = 5555; //provide ip for local network
net.createServer(function(s) {
    
    s.on('data', function (d) {
	console.log('socket.io server connected to client');
	console.log('alert msg data: ' + d.toString());
	//emit alert messages
	io.emit('DeviceEvent', d.toString()); //ok
	});
    //end current socket if there is a connection error
	s.on('error', function(error) {console.log('' + error);
	s.destroy();
	});
	s.on('end', function() {
	console.log('socket.io server disconnected');
	s.unref();
	});
	}).listen(port, function(){ 
	console.log('Socket IO server waiting on port', port + "...");
});

// device control API handler 
var route = require('./routes/route.js').controlHandler(app);

// using http to start the web server
http.listen(3000, function(){
  console.log('WebControl server listening on 3000...');
});
