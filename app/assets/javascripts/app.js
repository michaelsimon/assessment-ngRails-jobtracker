angular
  .module('app', ['ui.router', 'templates'])
  .config(function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('jobs', {
        url: '/jobs'
        templateUrl: 'views/jobs/list.html'
      })
      .state('jobs.show', {
        url: '/jobs/:id'
        templateUrl: 'views/jobs/show.html'
      })
      .state('jobs.edit', {
        url: '/jobs/:id/edit'
        templateUrl: 'views/jobs/edit.html'
      })
      .state('jobs.delete', {
        url: '/jobs/:id/delete'
        templateUrl: 'views/jobs/delete.html'
      })
      .state('notes', {
        url: '/jobs/:id/notes'
        templateUrl: 'views/notes/list.html'
      })
      .state('notes.show', {
        url: '/jobs/:id/notes/:notes_id'
        templateUrl: 'views/notes/show.html'
      })
      .state('notes.edit', {
        url: '/jobs/:id/notes/:notes_id/edit'
        templateUrl: 'views/notes/edit.html'
      })
      .state('notes.delete', {
        url: '/jobs/:id/notes/:notes_id/delete'
        templateUrl: 'views/notes/delete.html'
      })
  })
