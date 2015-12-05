"use strict"
var device = require("./device.js"); 
// device api
exports.routeHandler = function(app){
    app.use("/device", device); 
};


