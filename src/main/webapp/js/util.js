angular.module('demoApp')
.directive('fileUpload', function () {
    return {
        scope: true,        //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                var emitObj = {};
                emitObj.files = files;
                if(attrs.filetype)
                  if(attrs.filetype)
                     emitObj.type = attrs.filetype;
                scope.$emit("fileSelected", emitObj);                                   
            });
        }
    };
})
.factory("uploadSvc",['$http',function($http){
    var UploadSvc = {};
    UploadSvc.upload = function(file){
      var fd = new FormData();
      fd.append("file", file);
      return $http.post(servicePath.fileUpload, fd,{
          withCredentials: true,
          headers: {'Content-Type': undefined },
          transformRequest: angular.identity
      });
    };
    
    return UploadSvc;
}])