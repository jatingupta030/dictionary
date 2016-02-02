'use strict';

angular.module('demoApp')
 .controller('VolumeCtrl',['$scope','volumeSvc','uploadSvc', function($scope,volumeSvc,uploadSvc){
  var vm = this;
  $scope.volume = {};
  $scope.isEditMode = false;
  var icon = {};
  $scope.volSubmitDisabled = false;

  vm.getVolumes = function(){
  		volumeSvc.getVolumes()
		  .then(function(volms){
		  	$scope.volumes = volms;
		  })
		  .catch(function(res){
		  	alert("Error in Getting Volumes");
		  });
  }

 vm.getVolumes();
 $scope.editClick = function(id){
 	$scope.volumes.forEach(function(vol,index,arr){
 		if(id == vol.volumeID){
 			$scope.isEditMode = true;
 			$scope.volume = vol;
 		}
 			 		
 	});
 }

$scope.save = function(){
	$scope.volSubmitDisabled = true;
 	var vol = $scope.volume;
 	if(icon.file){
 		uploadSvc.upload(icon.file)
 		.then(function(res){
 			if(res.data.message != "ERROR"){
 				vol.icon = res.data.message;
 				$scope.volSubmitDisabled = false;
 	 			vm.save(vol);
 	 			$scope.volume = {};
 			}else{
 				alert("Error in file Upload");
 				$scope.volSubmitDisabled = false;
 			}
 		})
 		.catch(function(res){
 			alert("Error in file Upload");
 			$scope.volSubmitDisabled = false;
 		});
 	}else{
 		vm.save(vol);
 	}
 }

vm.save = function(vol){
	
	if($scope.isEditMode){
		volumeSvc.update(vol)
	 	.then(function(res){
	 		$('#volume-edit').modal("hide");
	 		alert("Volume Updated Successfully");
	 		$scope.volSubmitDisabled = false;
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		$scope.volSubmitDisabled = false;
	 		alert("Error in Volume Update");
	 	});
	}else{
		volumeSvc.save(vol)
	 	.then(function(res){
	 		$('#volume-edit').modal("hide");
	 		alert("Volume Saved Successfuly");
	 		$scope.volSubmitDisabled = false;
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		alert("Error in Saving Volume");
	 		$scope.volSubmitDisabled = false;
	 	});
	}
	$scope.volume = {};
    $scope.isEditMode=false;
}
 $scope.deleteVolume = function(id){
 	volumeSvc.deleteVolume(id)
 	.then(function(){
 		alert("Volume Deleted Successfully");
 		vm.getVolumes();
 	})
 	.catch(function(res){
 		alert("Error in Volume Deletion");
 	});
 	$scope.volume = {};
 }


 //listen for the file selected event
  $scope.$on("fileSelected", function (event, args) {
      $scope.$apply(function () {            
       icon.file = args.files[0];
       icon.name = args.files[0].name;
       $scope.volume.icon = args.files[0].name;
      });
  });

	$scope.onClose = function(){
		$scope.isEditMode=false;
		$scope.volume = {};
	}
}]);
