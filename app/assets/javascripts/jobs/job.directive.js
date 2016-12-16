(function(){

  'use strict';

  function Job() {
    return {
      restrict: 'EA',
      templateUrl: 'views/jobs/_job.directive.html',
      scope: {
        jobObject: '='
      },
      transclude: true
    }
  }



  angular
    .module('app')
    .directive('job', Job)
}())
