(function(){

  'use strict';

  function JobDetail() {
    return {
      restrict: 'EA',
      templateUrl: 'views/jobs/_job_detail.directive.html',
      scope: {
        jobObject: '=',
        statuses: '=',
        updateStatus: '&'
      }
    }
  }



  angular
    .module('app')
    .directive('jobDetail', JobDetail)
}())
