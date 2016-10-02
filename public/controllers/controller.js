var myApp = angular.module("myApp", []);

myApp.controller("myApp", ["$scope", "$http", function($scope, $http) {
	console.log("Hello world from controller");
}]);
