'use strict';

angular.module('demoApp')
 .factory("newlyEditedWordSvc",['$http',function($http){
      var newlyEditedWordSvc = {};
      newlyEditedWordSvc.getnewlyEditedWordData = function(){
        return $http.get(servicePath.getnewlyEditedWordData)
        .then(function(res){
        	return res.data;
        })
        .catch(function(err){
        	 throw err;
        });
      };

      newlyEditedWordSvc.deletedNewlyEditedWord = function(id){
    	var url = servicePath.deletedNewlyEditedWord + id  
       return $http.post(url)
            .then(function(res){
              return res.data;
            })
            .catch(function(err){
               throw err;
            });
      }
      
      newlyEditedWordSvc.updateNewlyEditedWord = function(newlyEditedWord){
    	return $http.post(servicePath.updateNewlyEditedWord, newlyEditedWord)
        .then(function(res){
          return res.data;
        })
        .catch(function(err){
          throw err;
        });
      };
      
      newlyEditedWordSvc.addNewlyEditedWord = function(newlyEditedWord){
          return $http.post(servicePath.addNewlyEditedWord, newlyEditedWord)
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            throw err;
          });
        };

      return newlyEditedWordSvc;
  }])