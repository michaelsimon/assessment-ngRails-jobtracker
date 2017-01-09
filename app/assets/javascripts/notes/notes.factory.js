(function() {

  'use strict'

  function NoteFactory($http, $state) {

    return {
      getNotes: getNotes,
      createNote: createNote
    }

    function getNotes() {
      return $http.get('/jobs/' + $state.params.id + '/notes')
      .then(handleResponse)
      .then(handleError)
    }

    function createNote(note) {

      var req = {
        method: 'POST',
        url: '/jobs/' + $state.params.id + '/notes',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          note: note
        }
      }
      return $http(req)
      .catch(handleError)
    }

    function handleResponse(response) {
      return response.data
    }

    function handleError(error) {
      return error
    }
  }

  NoteFactory.$inject = ['$http', '$state'];

  angular
  .module('app')
  .factory('NoteFactory', NoteFactory);
}())
