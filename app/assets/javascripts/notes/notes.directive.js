(function() {

  'use strict';

  angular
  .module('app')
  .directive('note', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/notes/_note.directive.html',
      scope: {
        noteObject: '='
      }
    }
  });


}())
