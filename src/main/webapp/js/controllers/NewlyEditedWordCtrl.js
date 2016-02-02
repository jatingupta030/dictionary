'use strict';

angular.module('demoApp')
 .controller('NewlyEditedWordCtrl',['$scope', 'newlyEditedWordSvc', function($scope, newlyEditedWordSvc) {
  	$scope.allNewlyEditedWordData = [];
	$scope.newlyEditedWord = {};
	$scope.isEditMode = false;
	var newlyWord = this;
	$scope.editedWordSubmitDisabled = false;

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
		$scope.editedWordSubmitDisabled = true;
		if(evt){
	      evt.preventDefault();
	    }
		if($scope.isEditMode){
			newlyEditedWordSvc.updateNewlyEditedWord($scope.newlyEditedWord).then(function(result){
				$('#add-word').modal("hide");
				alert("Word Successfully Updated");
				$scope.editedWordSubmitDisabled = false;
				newlyWord.getNewlyEditedWord();
		      }).catch(function(err){
			    throw err;
			    $scope.editedWordSubmitDisabled = false;
		    });
		}else{
			newlyEditedWordSvc.addNewlyEditedWord($scope.newlyEditedWord).then(function(result){
				$('#add-word').modal("hide");
				alert("Word Successfully Added");
				$scope.editedWordSubmitDisabled = false;
				newlyWord.getNewlyEditedWord();
		      }).catch(function(err){
			    throw err;
			    $scope.editedWordSubmitDisabled = false;
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
