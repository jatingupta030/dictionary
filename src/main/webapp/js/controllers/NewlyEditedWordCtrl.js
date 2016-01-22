'use strict';

angular.module('demoApp')
 .controller('NewlyEditedWordCtrl',['$scope', 'newlyEditedWordSvc', function($scope, newlyEditedWordSvc) {
  	$scope.allNewlyEditedWordData = [];
	$scope.newlyEditedWord = {};
	var newlyWord = this;

	newlyWord.getNewlyEditedWord = function(){
	  	newlyEditedWordSvc.getnewlyEditedWordData().then(function(response){
		     $scope.allNewlyEditedWordData = response;
		}).catch(function(err){
		    throw err;
	    });
	}
	newlyWord.getNewlyEditedWord();

	$scope.editClick = function(id){
		$scope.allNewlyEditedWordData.forEach(function(item, index, arr){
			if(id == item.id)
				$scope.newlyEditedWord = item;
		});
	}

	$scope.submitClick = function(evt) {
		if(evt){
	      evt.preventDefault();
	    }
		newlyEditedWordSvc.updateNewlyEditedWord($scope.newlyEditedWord).then(function(result){
			$('#add-word').modal("hide");
			alert(result);
			newlyWord.getNewlyEditedWord();
	      }).catch(function(err){
		    throw err;
	    });
	}

	$scope.deleteClick = function(id){
	 	newlyEditedWordSvc.deletedNewlyEditedWord(id)
	 	.then(function(result){
	 		alert(result);
	 		newlyWord.getNewlyEditedWord();
	 	})
	 	.catch(function(res){
	 		alert("error in newly Edited deletion");
	 	});
 	}
}]);
