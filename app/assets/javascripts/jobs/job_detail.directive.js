(function(){

  'use strict';

  function JobDetail() {
    return {
      restrict: 'EA',
      templateUrl: 'views/jobs/_job_detail.directive.html',
      controller: 'JobController as vm',
      scope: {
        jobObject: '='
      }
    }
  }



  angular
    .module('app')
    .directive('jobDetail', JobDetail)
}())
