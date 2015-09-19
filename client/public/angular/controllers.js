

var app = angular.module('myApp', ['routesModule', 'factories']);

app.controller('myController', ['$scope','factory', function($scope, factory){

  console.log("ctrl check");


}]);