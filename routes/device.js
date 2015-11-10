'strict'
var express = require('express');
var bodyParser = require('body-parser');

// This Tcp client will send the control code pattern
// to the remote I/O Module
/********************************
-o-  Device TCP Client Setup  -o-
*********************************/
var net = require('net');

var TCPconnect = function (controldata){
	var client = net.connect({
	port: 51111,
	host: 'localhost'
	}, function() {
	console.log('client connected to TCP server');
	this.write(controldata);
	});

	client.on('error', function(error) {
	console.log(error);
	});
	client.on('end', function() {
	console.log('client connection to TCP server ended');
	});
};

/***********************************
-o-  Device Control API Handler  -o-
************************************/

var r = express.Router();
r.use(bodyParser.json());

// dummy variable, we are not expecting any response
var result = [];

//*** DEVICE 1 ***
r.route('/d1') //ON
   .post(function (req, res, next) {
	TCPconnect("ON1");
	res.json({ response : result });
 })
   .get(function (req, res, next)  {
	TCPconnect("OFF1");
	res.json({ response : result });
});

//*** DEVICE 2 ***
r.route('/d2') //ON
   .post(function (req, res, next) {
	TCPconnect("ON2");
	res.json({ response : result });
})
   .get(function (req, res, next)  {
	TCPconnect("OFF2");
	res.json({ response : result });
})

//*** DEVICE 3 ***
r.route('/d3') //ON
   .post(function (req, res, next) {
	TCPconnect("ON3");
	res.json({ response : result });
})
   .get(function (req, res, next)  {
	TCPconnect("OFF3");
	res.json({ response : result });
})

//*** DEVICE 4 ***
r.route('/d4') //ON
    .post(function (req, res, next) {
	TCPconnect("ON4");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF4");
	res.json({ response : result });
})

//*** DEVICE 5 ***
r.route('/d5') //ON
    .post(function (req, res, next) {
	TCPconnect("ON5");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF5");
	res.json({ response : result });
})

//*** DEVICE 6 ***
r.route('/d6') //ON
    .post(function (req, res, next) {
	TCPconnect("ON6");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF6");
	res.json({ response : result });
})

module.exports = r;
