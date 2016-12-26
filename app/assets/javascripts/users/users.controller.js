(function() {

  'use strict';

  function UserController($rootScope, $scope, $state, Auth) {
    var vm = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

    vm.register = register;
    vm.login = login;

    function register() {
      Auth.register(vm.user, config).then(function(registeredUser) {
        $rootScope.user = registeredUser
        $state.go('jobs.list')
      }, function(error) {
        alert(response.data.error);
      })
    }

    function login() {
      Auth.login(vm.user, config).then(function(user) {
        $state.go('jobs.list')
      }, function(error) {
        alert(response.data.error);
      })
    }

  }
  angular
  .module('app')
  .controller('UserController', UserController);


}())
