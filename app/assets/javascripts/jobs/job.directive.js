(function(){

  'use strict';

  function Job() {
    return {
      restrict: 'EA',
      templateUrl: 'views/jobs/_job.directive.html',
      scope: {
        jobObject: '='
      },
      controller: 'JobController as vm',
      transclude: true
    }
  }



  angular
    .module('app')
    .directive('job', Job)
}())
