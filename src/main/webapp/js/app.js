'use strict';
angular.module('demoApp',[
  'ui.router', 
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
  })
  .run(function ($rootScope, $location) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.tab = "volumes";
    $rootScope.changeTab = function(tab){
      $rootScope.tab = tab;      
    }
    
    $rootScope.staticPath = servicePath.staticPath;
  });
  