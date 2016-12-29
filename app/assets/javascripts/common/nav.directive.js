(function() {
  'use strict'

  function Nav(AuthService) {
    return {
      restrict: 'EA',
      templateUrl: 'views/common/_nav.html'
    }
  }

  angular
  .module('app')
  .directive('nav', Nav);

}())
