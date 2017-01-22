(function() {

  'use strict'

  angular
  .module('app')
  .directive('input', ['$parse', function ($parse) {
    return {
      restrict: 'E',
      require: '?ngModel',
      link: function (scope, element, attrs) {
        if(attrs.value) {
          $parse(attrs.ngModel).assign(scope, attrs.value);
        }
      }
    };
  }]);
}())
