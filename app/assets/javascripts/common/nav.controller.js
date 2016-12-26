(function() {
  'use strict';

  function NavCtrl($rootScope, $scope, Auth) {

    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout  = Auth.logout;

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

    $scope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      $rootScope.user = undefined
    });


  }

  angular
  .module('app')
  .controller('NavCtrl', NavCtrl);

}())
