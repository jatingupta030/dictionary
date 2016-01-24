'use strict';

angular.module('demoApp')
 .controller('VolumeCtrl',['$scope','volumeSvc','uploadSvc', function($scope,volumeSvc,uploadSvc){
  var vm = this;
  $scope.volume = {};
  $scope.isEditMode = false;
  var icon = {};
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
 	var vol = $scope.volume;
 	if(icon.file){
 		uploadSvc.upload(icon.file)
 		.then(function(res){
 			if(res.data.message != "ERROR"){
 				vol.icon = res.data.message;
 	 			vm.save(vol);
 			}else{
 				alert("Error in file Upload")
 			}
 		})
 		.catch(function(res){
 			alert("Error in file Upload");
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
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		alert("Error in Volume Update");
	 	});
	}else{
		volumeSvc.save(vol)
	 	.then(function(res){
	 		$('#volume-edit').modal("hide");
	 		alert("Volume Saved Successfuly");
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		alert("Error in Saving Volume");
	 	});
	}
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
 }


 //listen for the file selected event
  $scope.$on("fileSelected", function (event, args) {
      $scope.$apply(function () {            
       icon.file = args.files[0];
       icon.name = args.files[0].name;
       $scope.volume.icon = args.files[0].name;
      });
  });

}]);
