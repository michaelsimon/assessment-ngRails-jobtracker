(function() {

  'use strict'

  function JobController(JobFactory, $state) {
    var vm = this;
    // console.log($state);
    vm.createJob = createJob;

    // //instantiate functions
    activate();

    // define methods
    function activate() {
      if ($state.current.name == "jobs.list") {
        getJobs();
      }
      else if  ($state.current.name == "jobs.show") {
        getJob($state.params.id)
      }
    }

    function getJobs() {
      return JobFactory.getJobs()
        .then(setJobs)
    }

    function getJob(params) {
      return JobFactory.getJob(params)
        .then(setJobs)
    }

    function createJob() {
      return JobFactory.createJob(vm.newJob)
        .then($state.go('jobs.list'))
    }


    function setJobs(data) {
      return vm.jobs = data;
    }










  }
  angular
    .module('app')
    .controller('JobController', JobController);
}())
