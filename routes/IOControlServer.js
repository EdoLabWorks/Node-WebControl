"strict"
var net = require("net");
// socket.io TCP server to accept event signal from the IO-control module 
exports.server = function (io){
	var port = 5555;
	net.createServer(function(server) {
	server.setNoDelay(true);
    server.on("data", function(message) {
		console.log("socket.io TCP server connected");
		console.log("DeviceEvent: " + message.toString());
		io.emit("DeviceEvent", message.toString()); 
	});
    server.on("error", function(error) {console.log("" + error);
		server.destroy();
	});
	server.on("end", function() {
		console.log("socket.io TCP server disconnected");
		server.unref();
	});
	}).listen(port, function(){ 
		console.log("socket.io TCP server waiting on port: " + port);
	});
};