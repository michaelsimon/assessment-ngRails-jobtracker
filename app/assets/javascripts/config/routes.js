(function() {

  'use strict'

  angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('jobs', {
      url: "/jobs",
      abstract: true,
      template: '<ui-view />',
    })
    .state('jobs.list', {
      url: "/list",
      templateUrl: 'views/jobs/_index.html',
      controller: 'JobController as vm'
    })
    .state('jobs.show', {
      url: "/view/:id",
      templateUrl: 'views/jobs/_show.html',
      controller: 'JobController as vm'
    })
    .state('jobs.new', {
      url: "/new",
      templateUrl: 'views/jobs/_new.html',
      controller: 'JobController as vm'
    })
    .state('jobs.edit', {
      url: "/view/:id/edit",
      templateUrl: 'views/jobs/_edit.html',
      controller: 'JobController as vm'
    })
    .state('jobs.register', {
      url: "/register",
      templateUrl: 'views/users/_register.html',
      controller: 'UserController as vm'
    })
    .state('jobs.login', {
      url: "/login",
      templateUrl: 'views/users/_login.html',
      controller: 'UserController as vm'
    })
    $urlRouterProvider.otherwise('/jobs');
  })
  
}())
