(function() {

  'use strict';

  function UserController($rootScope, $state, Auth, $mdDialog) {
    var vm = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

    vm.register = register;
    vm.login = login;

    function register() {
      Auth.register(vm.user, config).then(function(registeredUser) {
        $rootScope.user = registeredUser
        $state.go('jobs.list')
      })
      .catch(function(error) {
        alert(error);
      })
    }

    function login() {
      Auth.login(vm.user, config)
      .then(function(user) {
        $state.go('jobs.list')
      })
      .catch(function(error) {
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.querySelector('document.body')))
          .clickOutsideToClose(true)
          .title('Invalid Credentials')
          .textContent('You did not enter a valid username and password. Please try again.')
          .ariaLabel('Login Failure')
          .ok('OK')
        );
      })
    }
  }

  UserController.$inject = ['$rootScope', '$state', 'Auth', '$mdDialog'];

  angular
  .module('app')
  .controller('UserController', UserController);


}())
