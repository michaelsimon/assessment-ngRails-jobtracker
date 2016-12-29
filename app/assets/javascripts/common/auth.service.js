(function() {

  'use strict';

  function AuthService($rootScope, Auth) {

    $rootScope.signedIn = Auth.isAuthenticated;
    $rootScope.logout  = Auth.logout;

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

    $rootScope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $rootScope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $rootScope.$on('devise:logout', function (e, user){
      $rootScope.user = undefined
    });


  }

  angular
  .module('app')
  .service('AuthService', AuthService);

}())
