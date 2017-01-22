(function(){

  'use strict';

  angular
    .module('app')
    .directive('jobDetail', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/jobs/_job_detail.directive.html',
      scope: {
        jobObject: '=',
        statuses: '=',
        updateStatus: '&'
      }
    }
  });


}())
