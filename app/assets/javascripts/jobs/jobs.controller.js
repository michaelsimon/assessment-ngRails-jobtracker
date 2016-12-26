(function() {

  'use strict'

  function JobController(JobFactory, $state, $scope, Auth) {
    var vm = this;
    // console.log($state);
    vm.createJob = createJob;
    vm.updateJob = updateJob;

    // debugger

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
      else if ($state.current.name == "jobs.edit")  {
        vm.currentJob = getJob($state.params.id)
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

    function updateJob() {
      // debugger
      return JobFactory.updateJob(vm.jobs.job)
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
