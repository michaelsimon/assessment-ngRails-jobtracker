(function() {
  'use strict'

  function Nav(AuthService) {
    return {
      restrict: 'EA',
      templateUrl: 'views/common/_nav.html'
    }
  }

  Nav.$inject = ['AuthService'];

  angular
  .module('app')
  .directive('nav', Nav);

}())
