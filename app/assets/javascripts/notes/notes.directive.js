(function() {

  'use strict';

  function Note() {
    return {
      restrict: 'E',
      templateUrl: 'views/notes/_note.directive.html',
      scope: {
        noteObject: '='
      }
    }
  }

  angular
    .module('app')
    .directive('note', Note)
}())
