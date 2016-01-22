'use strict';

angular.module('demoApp')
 .factory("manageVolumeSvc",['$http',function($http){
      var manageVolumeSvc = {};
      manageVolumeSvc.getManageVolumes = function(){
        return $http.get(servicePath.getManageVolume)
        .then(function(res){
        	return res.data;
        })
        .catch(function(err){
        	 throw err;
        });
      };

      manageVolumeSvc.getCategory = function(){
        return $http.get(servicePath.getCategory)
        .then(function(res){
          return res.data;
        })
        .catch(function(err){
           throw err;
        });
      };

      manageVolumeSvc.deleteManageVol = function(id){
       return $http.post(servicePath.deleteManageVol,{id:id})
            .then(function(res){
              return res.data;
            })
            .catch(function(err){
               throw err;
            });
      }
      
      /*manageVolumeSvc.addManageVolumes = function(manageVol){
        return $http.post(path,product);
      };*/
      manageVolumeSvc.updateManageVolumes = function(manageVol){
        return $http.post(servicePath.updateManageVol, manageVol)
        .then(function(res){
          return res.data;
        })
        .catch(function(err){
          throw err;
        });
      };

      return manageVolumeSvc;
  }])