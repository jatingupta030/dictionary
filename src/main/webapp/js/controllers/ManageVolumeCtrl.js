'use strict';

angular.module('demoApp')
 .controller('ManageVolumeCtrl',['$scope', 'manageVolumeSvc', function($scope, manageVolumeSvc) {
	$scope.allManageVolumes = [];
	$scope.allCategory = [];
	$scope.manageVol = {};
	$scope.isSearch = false;
	$scope.isEditMode= false;
	$scope.wordSubmitDisabled = false;
	var managev = this;

	managev.getManageVol = function(){
	  	manageVolumeSvc.getManageVolumes().then(function(response){
		     $scope.allManageVolumes = response;
		}).catch(function(err){
		    throw err;
	    });
	}
	
	managev.getManageVol();
    
	manageVolumeSvc.getCategory().then(function(response){
	    $scope.allCategory = response;
	}).catch(function(err){
	   	throw err;
    });

	$scope.editClick = function(id){
		$scope.allManageVolumes.forEach(function(item, index, arr){
			if(id == item.wordID){
				$scope.isEditMode = true;
				$scope.manageVol = item;
			}
		});
	}

	$scope.submitClick = function(evt) {
	$scope.wordSubmitDisabled = true;
		if(evt){
	      evt.preventDefault();
	    }
		if($scope.isEditMode){
			manageVolumeSvc.updateManageVolumes($scope.manageVol).then(function(result){
				$('#editcontent').modal("hide");
				$scope.wordSubmitDisabled = false;
				alert("Word Successfully Updated");
				managev.getManageVol();
		      }).catch(function(err){
			    throw err;
			    $scope.wordSubmitDisabled = false;
			    alert("Error in Word Updation");
		    });
		}else{
			manageVolumeSvc.addDictionaryWord($scope.manageVol).then(function(result){
				$('#editcontent').modal("hide");
				alert("Word Successfully Added");
				$scope.wordSubmitDisabled = false;
				managev.getManageVol();
		      }).catch(function(err){
			    throw err;
			    alert("Error in Word Addition");
			    $scope.wordSubmitDisabled = false;
		    });
		}
		$scope.isEditMode = false;
		$scope.manageVol = {};
	}

	$scope.deleteClick = function(id){
	 	manageVolumeSvc.deleteManageVol(id)
	 	.then(function(result){
	 		alert(result.message + " In Deleting Word");
	 		managev.getManageVol();
	 	})
	 	.catch(function(res){
	 		alert("Error in Word Deletion");
	 	});
	 	$scope.manageVol = {};
 	}

    $scope.onCategoryChange = function(category){
    	$scope.isSearch = true;
	    if(!category) {
	      $scope.isSearch = false;
	      return;
	    }
		$scope.searchResults = [];
	    $scope.searchResults = $scope.allManageVolumes.filter(function(d){
	        return category == d.volumeID;
	    });
  	}

  	$scope.onClose = function(){
        		$scope.isEditMode=false;
        		$scope.manageVol = {};
        	}
}]);
