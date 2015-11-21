var device = angular.module('MainApp', []);

device.controller('DeviceController', ['$scope', 'RESTservice', function ($scope, RESTservice) {
	// Setup the view model
	var vm = {};
	vm.state = [];
	
	//auto loading of state when home index loads
	RESTservice.getItems().then(function (response) {
 	vm.state = response.data.items; 
	});
	
	// device 1
	vm.device1ON = function () {
		RESTservice.device1ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device1OFF = function () {
		RESTservice.device1OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	// device 2
	vm.device2ON = function () {
		RESTservice.device2ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device2OFF = function () {
		RESTservice.device2OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	// device 3
	vm.device3ON = function () {
		RESTservice.device3ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device3OFF = function () {
		RESTservice.device3OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	// device 4
	vm.device4ON = function () {
		RESTservice.device4ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device4OFF = function () {
		RESTservice.device4OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };
        
	// device 5
	vm.device5ON = function () {
		RESTservice.device5ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device5OFF = function () {
		RESTservice.device5OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	// device 6
	vm.device6ON = function () {
		RESTservice.device6ON().then(function (response) {
		vm.state = response.data.device; 
		});
        };

	vm.device6OFF = function () {
		RESTservice.device6OFF().then(function (response) {
		vm.state = response.data.device; 
		});
        };
	
	/* vm.deviceState = function(){	
		RESTservice.getstate().then(function (response) {
		vm.state = response.data.itemA; 
	  });
	}; */
   
	$scope.vm = vm;
	
}]);

// http service module
device.service('RESTservice', ['$http', function ($http) {
	// match with REST API endpoint ('/device') in the backend.
	var url = '/device';
	return {

		getItems: function () {
		return $http.get(url);   
		},

		//*** Device Control Service ***

		// device 1
		device1ON: function () {
		return $http.post(url + '/d1/'); //ON   
		},
		device1OFF: function () {
		return $http.get(url + '/d1/'); //OFF   
		},

		// device 2
		device2ON: function () {
		return $http.post(url + '/d2/'); //ON    
		},
		device2OFF: function () {
		return $http.get(url + '/d2/'); //OFF   
		},

		// device 3
		device3ON: function () {
		return $http.post(url + '/d3/'); //ON    
		},
		device3OFF: function () {
		return $http.get(url + '/d3/'); //OFF   
		},

		// device 4
		device4ON: function () {
		return $http.post(url + '/d4/'); //ON    
		},
		device4OFF: function () {
		return $http.get(url + '/d4/'); //OFF    
		},
		
		// device 5
		device5ON: function () {
		return $http.post(url + '/d5/'); //ON   
		},
		device5OFF: function () {
		return $http.get(url + '/d5/'); //OFF    
		},
		
		// device 6
		device6ON: function () {
		return $http.post(url + '/d6/'); //ON   
		},

		device6OFF: function () {
		return $http.get(url + '/d6/'); //OFF   
		},
	}
}]); 


