var myApp = angular.module("myApp", []);

myApp.controller("myApp", ["$scope", "$http", function($scope, $http) {
	
	$scope.editing = false;
	
	var refresh = function() {
		$http.get("/contactlist").success(function(response) {
			console.log("I got the data I requested");
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};
	
	refresh();
	
	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post("/contactlist", $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	}
	
	$scope.remove = function(id) {
		console.log(id);
		$scope.editing = false;
		$http.delete("/contactlist/" + id).success(function(response) {
			refresh();
		});
	};
	
	$scope.edit = function(id) {
		console.log(id);
		$scope.editing = true;
		$http.get("/contactlist/" + id).success(function(response) {
			$scope.contact = response;
		});
	}
	
	$scope.update = function() {
		console.log($scope.contact._id);
		$scope.editing = false;
		$http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response) {
			refresh();
		});
	};
	
	$scope.deselect = function() {
		$scope.editing = false;
		$scope.contact = "";
	}
}]);
