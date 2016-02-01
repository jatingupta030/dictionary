'use strict';

angular.module('demoApp')
 .controller('NewlyEditedWordCtrl',['$scope', 'newlyEditedWordSvc', function($scope, newlyEditedWordSvc) {
  	$scope.allNewlyEditedWordData = [];
	$scope.newlyEditedWord = {};
	$scope.isEditMode = false;
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
			if(id == item.editedWordID){
				$scope.isEditMode = true;
				$scope.newlyEditedWord = item;	
			}
		});
	}

	$scope.submitClick = function(evt) {
		if(evt){
	      evt.preventDefault();
	    }
		if($scope.isEditMode){
			newlyEditedWordSvc.updateNewlyEditedWord($scope.newlyEditedWord).then(function(result){
				$('#add-word').modal("hide");
				alert("Word Successfully Updated");
				newlyWord.getNewlyEditedWord();
		      }).catch(function(err){
			    throw err;
		    });
		}else{
			newlyEditedWordSvc.addNewlyEditedWord($scope.newlyEditedWord).then(function(result){
				$('#add-word').modal("hide");
				alert("Word Successfully Added");
				newlyWord.getNewlyEditedWord();
		      }).catch(function(err){
			    throw err;
		    });
		}
		$scope.isEditMode = false;
		$scope.newlyEditedWord = {};
	}

	$scope.deleteClick = function(id){
	 	newlyEditedWordSvc.deletedNewlyEditedWord(id)
	 	.then(function(result){
	 		alert(result.message + " In Deleting Word");
	 		newlyWord.getNewlyEditedWord();
	 	})
	 	.catch(function(res){
	 		alert("Error in Word deletion");
	 	});
	 	$scope.newlyEditedWord = {};
 	}

 	$scope.onClose = function(){
    		$scope.isEditMode=false;
    		$scope.newlyEditedWord = {};
    	}
}]);
