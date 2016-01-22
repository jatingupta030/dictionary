'use strict';

angular.module('demoApp')
 .controller('ManageVolumeCtrl',['$scope', 'manageVolumeSvc', function($scope, manageVolumeSvc) {
	$scope.allManageVolumes = [];
	$scope.allCategory = [];
	$scope.manageVol = {};
	$scope.isSearch = false;
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
			if(id == item.id)
				$scope.manageVol = item;
		});
	}

	$scope.submitClick = function(evt) {
		if(evt){
	      evt.preventDefault();
	    }
		manageVolumeSvc.updateManageVolumes($scope.manageVol).then(function(result){
			$('#editcontent').modal("hide");
			alert(result);
			managev.getManageVol();
	      }).catch(function(err){
		    throw err;
	    });
	}

	$scope.deleteClick = function(id){
	 	manageVolumeSvc.deleteManageVol(id)
	 	.then(function(result){
	 		alert(result);
	 		managev.getManageVol();
	 	})
	 	.catch(function(res){
	 		alert("error in volume deletion");
	 	});
 	}

    $scope.onCategoryChange = function(category){
    	$scope.isSearch = true;
	    if(!category) {
	      $scope.isSearch = false;
	      return;
	    }
		$scope.searchResults = [];
	    $scope.searchResults = $scope.allManageVolumes.filter(function(d){
	        return category == d.category;
	    });
  	}
}]);
