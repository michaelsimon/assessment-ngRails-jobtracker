(function(){

  'use strict';

  angular
    .module('app')
    .directive('job', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/jobs/_job.html',
      scope: {
        jobObject: '='
      }
    }
  });


}())
