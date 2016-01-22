'use strict';
angular.module('demoApp')
.controller('NewsCtrl',['$scope','newsSvc', function($scope,newsSvc) {
	var vm = this;
	$scope.news = {};
	var icon = {};
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
		newsSvc.save($scope.news)
		.then(function(res){
			alert(res.message + "IN SAVING NEWS");
			vm.getNewes();
		})
		.catch(function(){
			alert("ERROR IN SAVING NEWS");
		});
	}

}]);
