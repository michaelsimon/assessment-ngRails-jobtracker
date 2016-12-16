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
      controller: 'JobController as vm'
    })
    .state('jobs.list', {
      url: "/list",
      templateUrl: 'views/jobs/_index.html'
    })
    .state('jobs.show', {
      url: "/view/:id",
      templateUrl: 'views/jobs/_show.html'
    })
    .state('jobs.new', {
      url: "/new",
      templateUrl: 'views/jobs/_new.html'
    })
    $urlRouterProvider.otherwise('/jobs');
  })
}())



// .state('jobs.new', {
//   url: '/jobs/new',
//   templateUrl: 'views/jobs/_new.html'
// })
// .state('jobs.edit', {
//   url: '/jobs/:id/edit',
//   templateUrl: 'views/jobs/_edit.html'
// })
// .state('jobs.delete', {
//   url: '/jobs/:id/delete',
//   templateUrl: 'views/jobs/_delete.html'
// })
// .state('notes', {
//   url: '/jobs/:id/notes',
//   templateUrl: 'views/notes/_index.html'
// })
// .state('notes.show', {
//   url: '/jobs/:id/notes/:notes_id',
//   templateUrl: 'views/notes/_show.html'
// })
// .state('notes.new', {
//   url: '/jobs/:id/notes/new',
//   templateUrl: 'views/notes/_new.html'
// })
// .state('notes.edit', {
//   url: '/jobs/:id/notes/:notes_id/edit',
//   templateUrl: 'views/notes/_edit.html'
// })
// .state('notes.delete', {
//   url: '/jobs/:id/notes/:notes_id/delete',
//   templateUrl: 'views/notes/_delete.html'
// });
