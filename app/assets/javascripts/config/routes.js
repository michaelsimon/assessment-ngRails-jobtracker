(function() {

  'use strict'

  angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('jobs', {
      url: "/",
      abstract: true,
      template: '<ui-view />',
      controller: ['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, $rootScope) {
          var requireAuth = toState.data.requireAuth;
          if (requireAuth && typeof event.currentScope.user === 'undefined') {
            event.preventDefault();
            $state.go('jobs.login');
          }
        });
        $rootScope.$on('devise:logout', function(event, oldCurrentUser) {
          $state.go('jobs.home');
        });
      }]
    })
    .state('jobs.home', {
      url: "home",
      templateUrl: 'views/common/_home.html',
      data: {
        requireAuth: false
      }
    })
    .state('jobs.list', {
      url: "list",
      templateUrl: 'views/jobs/_index.html',
      controller: 'JobController as vm',
      data: {
        requireAuth: true
      }
    })
    .state('jobs.show', {
      url: "view/:id",
      templateUrl: 'views/jobs/_show.html',
      data: {
        requireAuth: true
      }
    })
    .state('jobs.new', {
      url: "new",
      templateUrl: 'views/jobs/_new.html',
      controller: 'JobController as vm',
      data: {
        requireAuth: true
      }
    })
    .state('jobs.edit', {
      url: "view/:id/edit",
      templateUrl: 'views/jobs/_edit.html',
      controller: 'JobController as vm',
      data: {
        requireAuth: true
      }
    })
    .state('jobs.register', {
      url: "register",
      templateUrl: 'views/users/_register.html',
      controller: 'UserController as vm',
      data: {
        requireAuth: false
      }
    })
    .state('jobs.login', {
      url: "login",
      templateUrl: 'views/users/_login.html',
      controller: 'UserController as vm',
      data: {
        requireAuth: false
      }
    })
    $urlRouterProvider.otherwise('/home');
  }]);

}())
