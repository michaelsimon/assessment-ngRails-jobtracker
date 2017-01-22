(function() {

  'use strict'

  angular
  .module('app')
  .directive('nav', ['AuthService', function(AuthService) {

    return {
      restrict: 'E',
      templateUrl: 'views/common/_nav.html'
    }
  }]);

}())
