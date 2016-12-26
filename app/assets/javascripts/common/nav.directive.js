(function() {
  'use strict'

  function Nav() {
    return {
      restrict: 'EA',
      templateUrl: 'views/common/_nav.html',
      controller: 'NavCtrl'
    }
  }

  angular
  .module('app')
  .directive('nav', Nav);

}())
