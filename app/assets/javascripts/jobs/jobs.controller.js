(function() {

  'use strict'

  function JobController(JobFactory, $state, $scope, Auth) {
    var vm = this;

    vm.createJob = createJob;
    vm.updateJob = updateJob;
    vm.updateStatus = updateStatus;

    vm.statuses = [
    {id: 1, value: 'Discovered'},
    {id: 2, value: 'Application in Progress'},
    {id: 3, value: 'Applied'},
    {id: 4, value: 'Interviewing'},
    {id: 5, value: 'Pending Response'},
    {id: 6, value: 'No Response'},
    {id: 7, value: 'Job Offer Received'},
    {id: 8, value: 'Job Offer Accepted'},
    {id: 9, value: 'Job Offer Declined'}
  ];

    //instantiate functions
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

    function updateStatus(jobId, jobStatus) {
      return JobFactory.updateStatus(jobId, jobStatus)
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
