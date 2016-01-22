'use strict';

angular.module('demoApp')
 .factory("newsSvc",['$http',function($http){
      var newsSvc = {};
      newsSvc.getNewes = function(){
        return $http.get(servicePath.getNewes)
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      };

      newsSvc.save = function(news){
  		 return $http.post(servicePath.saveNews)
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      }

      return newsSvc;
  }])