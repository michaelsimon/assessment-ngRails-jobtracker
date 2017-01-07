(function(){

  'use strict';

  function JobDetail() {
    return {
      restrict: 'EA',
      templateUrl: 'views/jobs/_job_detail.directive.html',
      scope: {
        jobObject: '=',
        statuses: '='
      }
    }
  }



  angular
    .module('app')
    .directive('jobDetail', JobDetail)
}())
