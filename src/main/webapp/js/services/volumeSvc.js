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

       volumeSvc.deleteVolume = function(id){
    	   var url = servicePath.deleteVolume + id;
  		 return $http.post(url)
		        .then(function(res){
		        	return res.data;
		        })
		        .catch(function(err){
		        	 throw err;
		        });
      }
   volumeSvc.update = function(vol){
		 return $http.post(servicePath.updateVolume, vol)
	        .then(function(res){
	        	return res.data;
	        })
	        .catch(function(err){
	        	 throw err;
	        });
    }
      return volumeSvc;
  }])