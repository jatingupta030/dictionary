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
		  	alert("error in getting volume");
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
 			vol.icon = res.data;
 			vm.save(vol);
 		})
 		.catch(function(res){
 			alert("error in file upload");
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
	 		alert("volume updated successfuly");
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		alert("error in getting volume update");
	 	});
	}else{
		volumeSvc.save(vol)
	 	.then(function(res){
	 		$('#volume-edit').modal("hide");
	 		alert("volume updated successfuly");
	 		vm.getVolumes();
	 	})
	 	.catch(function(){
	 		$('#volume-edit').modal("hide");
	 		alert("error in getting volume update");
	 	});
	}
	$scope.isEditMode=false;
}
 $scope.deleteVolume = function(id){
 	volumeSvc.deleteVolume(id)
 	.then(function(){
 		alert("volume deleted successfuly");
 		vm.getVolumes();
 	})
 	.catch(function(res){
 		alert("error in volume deletion");
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
