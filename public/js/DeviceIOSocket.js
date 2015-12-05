"use strict"
var socket = io();
socket.on("DeviceEvent", function(msg){
		var m = "";
		 
		  //device1
		 function ON1() {
			$("#btnON1").css("background-color", "orange");
			$("#btnOFF1").css("background-color", "");
			m = "#dev1";
		 }
		 function OFF1() {
			$("#btnOFF1").css("background-color", "red");
			$("#btnON1").css("background-color", "");
			m = "#dev1";
		 }
		 if(msg === "ON1"){ 
			msg ="ON";
			ON1();
		 }
		 if(msg === "Device1 ON"){
			ON1();
		 }
		 if(msg === "OFF1"){ 
			msg ="OFF";
			OFF1();
		 }
		 if(msg === "Device1 OFF"){
			OFF1();
		 }
		 
		 //device2
		 function ON2() {
			$("#btnON2").css("background-color", "orange");
			$("#btnOFF2").css("background-color", "");
			m = "#dev2";
		 }
		 function OFF2() {
			$("#btnOFF2").css("background-color", "red");
			$("#btnON2").css("background-color", "");
			m = "#dev2";
		 }
		 if(msg === "ON2"){ 
			msg ="ON";
			ON2();
		 }
		 if(msg === "Device2 ON"){
			ON2();
		 }
		 if(msg === "OFF2"){ 
			msg ="OFF";
			OFF2();
		 }
		 if(msg === "Device2 OFF"){
			OFF2();
		 }

		  //device3
		 function ON3() {
			$("#btnON3").css("background-color", "orange");
			$("#btnOFF3").css("background-color", "");
			m = "#dev3";
		 }
		 function OFF3() {
			$("#btnOFF3").css("background-color", "red");
			$("#btnON3").css("background-color", "");
			m = "#dev3";
		 }
		 if(msg === "ON3"){ 
			msg ="ON";
			ON3();
		 }
		 if(msg === "Device3 ON"){
			ON3();
		 }
		 if(msg === "OFF3"){ 
			msg ="OFF";
			OFF3();
		 }
		 if(msg === "Device3 OFF"){
			OFF3();
		 }

		 //device4
		 function ON4() {
			$("#btnON4").css("background-color", "orange");
			$("#btnOFF4").css("background-color", "");
			m = "#dev4";
		 }
		 function OFF4() {
			$("#btnOFF4").css("background-color", "red");
			$("#btnON4").css("background-color", "");
			m = "#dev4";
		 }
		 if(msg === "ON4"){ 
			msg ="ON";
			ON4();
		 }
		 if(msg === "Device4 ON"){
			ON4();
		 }
		 if(msg === "OFF4"){ 
			msg ="OFF";
			OFF4();
		 }
		 if(msg === "Device4 OFF"){
			OFF4();
		 }
		 
		 //device5
		 function ON5() {
			$("#btnON5").css("background-color", "orange");
			$("#btnOFF5").css("background-color", "");
			m = "#dev5";
		 }
		 function OFF5() {
			$("#btnOFF5").css("background-color", "red");
			$("#btnON5").css("background-color", "");
			m = "#dev5";
		 }
		 if(msg === "ON5"){ 
			msg ="ON";
			ON5();
		 }
		 if(msg === "Device5 ON"){
			ON5();
		 }
		 if(msg === "OFF5"){ 
			msg ="OFF";
			OFF5();
		 }
		 if(msg === "Device5 OFF"){
			OFF5();
		 }
		 
		  //device6
		 function ON6() {
			$("#btnON6").css("background-color", "orange");
			$("#btnOFF6").css("background-color", "");
			m = "#dev6";
		 }
		 function OFF6() {
			$("#btnOFF6").css("background-color", "red");
			$("#btnON6").css("background-color", "");
			m = "#dev6";
		 }
		 if(msg === "ON6"){ 
			msg ="ON";
			ON6();
		 }
		 if(msg === "Device6 ON"){
			ON6();
		 }
		 if(msg === "OFF6"){ 
			msg ="OFF";
			OFF6();
		 }
		 if(msg === "Device6 OFF"){
			OFF6();
		 }
		 
		 //common to all devices
		 $(m).empty();
		 $(m).append($("<span>").text(msg));
});