'use strict';

angular.module('demoApp')
 .factory("volumeSvc",['$http',function($http){
      var volumeSvc = {};
      volumeSvc.getVolumes = function(){
      	
        return $http.get(servicePath.getVolumes)
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      };

      volumeSvc.save = function(vol){
  		 return $http.post(servicePath.saveVolume, vol)
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      }

       volumeSvc.delete = function(id){
  		 return $http.post(servicePath.deleteVolume,{id:id})
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      }

      return volumeSvc;
  }])