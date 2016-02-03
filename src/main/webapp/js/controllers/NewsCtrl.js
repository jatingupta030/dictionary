'use strict';
angular.module('demoApp')
.controller('NewsCtrl',['$scope','newsSvc', function($scope,newsSvc) {
	var vm = this;
	$scope.news = {};
	$scope.addNewsDisabled = false;
	vm.getNewes = function(){
		newsSvc.getNewes()
		.then(function(data){
			$scope.newes = data;
		})
		.catch(function(res){
			alert("No News Available");
		})
	}

	vm.getNewes();

	$scope.save = function(){
		$scope.addNewsDisabled = true;
		newsSvc.save($scope.news)
		.then(function(res){
			alert(res.message + " in Saving News");
			$scope.addNewsDisabled = false;
			vm.getNewes();
		})
		.catch(function(){
			alert("Error in Saving News");
			$scope.addNewsDisabled = false;
		});
	}
}]);
