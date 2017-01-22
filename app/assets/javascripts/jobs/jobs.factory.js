(function() {

  'use strict'

  angular
  .module('app')
  .factory('JobFactory', ['$http', '$state', function($http, $state) {

    //callable methods on JobFactory
    return {
      getJobs: getJobs,
      getJob: getJob,
      createJob: createJob,
      updateJob: updateJob,
      updateStatus: updateStatus
    }

    //define methods
    function getJobs() {
      return $http.get('/jobs')
      .then(handleResponse)
      .catch(handleError)
    }

    function getJob(id) {
      return $http.get('/jobs/' + id)
      .then(handleResponse)
      .catch(handleError)
    }

    function createJob(job) {
      var req = {
        method: 'POST',
        url: '/jobs',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          job: job
        }
      }
      return $http(req)
        .catch(handleError)
    }

    function updateJob(job) {
      var req = {
        method: 'PATCH',
        url: '/jobs/' + job.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          job: job
        }
      }
      return $http(req)
        .catch(handleError)
    }

    function updateStatus(id, status) {
      var req = {
        method: 'PATCH',
        url: '/jobs/' + id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          status: status
        }
      }
      return $http(req)
        .catch(handleError)
    }

    //handle $http responses and errors
    function handleResponse(response){
      return response.data
    }

    function handleError(error) {
      $state.go('jobs.list')
    }
  }]);

}())
