"use strict"
var device = angular.module("MainApp", []);
device.controller("DeviceController", ["$scope", "CtrlService", function ($scope, CtrlService) {
	var vm = {};
	vm.state = [];

	// device 1
	vm.device1ON = function () {
		CtrlService.device1ON();
    	};
	vm.device1OFF = function () {
		CtrlService.device1OFF();
    	};

	// device 2
	vm.device2ON = function () {
		CtrlService.device2ON();
	};
	vm.device2OFF = function () {
		CtrlService.device2OFF();
    	};

	// device 3
	vm.device3ON = function () {
		CtrlService.device3ON();
    	};
	vm.device3OFF = function () {
		CtrlService.device3OFF();
    	};

	// device 4
	vm.device4ON = function () {
		CtrlService.device4ON();
    	};
	vm.device4OFF = function () {
		CtrlService.device4OFF();
    	};
        
	// device 5
	vm.device5ON = function () {
		CtrlService.device5ON();
    	};
	vm.device5OFF = function () {
		CtrlService.device5OFF();
    	};

	// device 6
	vm.device6ON = function () {
		CtrlService.device6ON();
    	};
	vm.device6OFF = function () {
		CtrlService.device6OFF();
    	};
		
	$scope.vm = vm;
	
}]);

// http control service module
device.service("CtrlService", ["$http", function ($http) {
	// match with REST API endpoint in the backend
	var url = "/device";
	return {
		
		// device 1
		device1ON: function () {
		return $http.post(url + "/d1");
		},
		device1OFF: function () {
		return $http.get(url + "/d1");   
		},

		// device 2
		device2ON: function () {
		return $http.post(url + "/d2");
		},
		device2OFF: function () {
		return $http.get(url + "/d2"); 
		},

		// device 3
		device3ON: function () {
		return $http.post(url + "/d3"); 
		},
		device3OFF: function () {
		return $http.get(url + "/d3");
		},

		// device 4
		device4ON: function () {
		return $http.post(url + "/d4");   
		},
		device4OFF: function () {
		return $http.get(url + "/d4");  
		},
		
		// device 5
		device5ON: function () {
		return $http.post(url + "/d5");
		},
		device5OFF: function () {
		return $http.get(url + "/d5");   
		},
		
		// device 6
		device6ON: function () {
		return $http.post(url + "/d6");
		},
		device6OFF: function () {
		return $http.get(url + "/d6");  
		},
	}
}]); 


