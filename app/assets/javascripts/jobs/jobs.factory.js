(function() {

  'use strict'

  function JobFactory($http) {

    //callable methods on JobFactory
    return {
      getJobs: getJobs,
      getJob: getJob,
      createJob: createJob,
      updateJob: updateJob
      // deleteJob: deleteJob
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

    function updateJob(job, $state) {

      // debugger
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
      // console.log(req)
      return $http(req)
        .catch(handleError)
    }

    //handle $http responses and errors
    function handleResponse(response){
      return response.data
    }

    function handleError(error) {
      return error
    }


  //
  //   createJob = function(job) {
  //     return $http({
  //       method: 'POST',
  //       url: '/jobs/',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: {
  //         job: job
  //       }
  //     });
  //   };
  //
  //   updateJob = function(job) {
  //     return $http({
  //       method: 'PATCH',
  //       url: '/jobs/' + job.id,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: {
  //         job: job
  //       }
  //     });
  //   };
  //
  //   deleteJob = function(job) {
  //     return $http({
  //       method: 'DELETE',
  //       url: '/jobs/' + job.id,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: {
  //         job: job
  //       }
  //     });
  //   };
  //
  }

  angular
  .module('app')
  .factory('JobFactory', JobFactory);

}())
