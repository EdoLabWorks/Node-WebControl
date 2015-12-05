"strict"
var express = require("express");
var bodyParser = require("body-parser");
var net = require("net");

// Tcp client to send control code to the remote IO-control module
var TCPconnect = function (data){
	var client = net.connect({
	port: 51111,
	host: "localhost"
	}, function() {
	console.log("TCP client connected");
	this.write(data);
	});

	client.on("error", function(error) {
	console.log(error);
	});
	client.on("end", function() {
	console.log("TCP client connection ended");
	});
};

// Device Control API Handler
var r = express.Router();
r.use(bodyParser.json());

var result = [];

/* DEVICE 1 */
r.route("/d1")
   .post(function (req, res, next) {
	TCPconnect("ON1");
	res.json({ response : result });
 })
   .get(function (req, res, next)  {
	TCPconnect("OFF1");
	res.json({ response : result });
});

/* DEVICE 2 */
r.route("/d2")
   .post(function (req, res, next) {
	TCPconnect("ON2");
	res.json({ response : result });
})
   .get(function (req, res, next)  {
	TCPconnect("OFF2");
	res.json({ response : result });
})

/* DEVICE 3 */
r.route("/d3")
   .post(function (req, res, next) {
	TCPconnect("ON3");
	res.json({ response : result });
})
   .get(function (req, res, next)  {
	TCPconnect("OFF3");
	res.json({ response : result });
})

/* DEVICE 4 */
r.route("/d4")
    .post(function (req, res, next) {
	TCPconnect("ON4");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF4");
	res.json({ response : result });
})

/* DEVICE 5 */
r.route("/d5") 
    .post(function (req, res, next) {
	TCPconnect("ON5");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF5");
	res.json({ response : result });
})

/* DEVICE 6 */
r.route("/d6")
    .post(function (req, res, next) {
	TCPconnect("ON6");
	res.json({ response : result });
})
    .get(function (req, res, next) {
	TCPconnect("OFF6");
	res.json({ response : result });
})

module.exports = r;
