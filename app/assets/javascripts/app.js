(function() {

  'use strict'

  angular
  .module('app', ['ui.router', 'templates','ngSanitize','ngMessages', 'ngMaterial','ngAnimate', 'ngAria','Devise'])
  .config(function($httpProvider, $mdThemingProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('grey');
  });

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

angular
.module('app')
.directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return parseInt(val, 10);
      });
      ngModel.$formatters.push(function(val) {
        return '' + val;
      });
    }
  };
});

}())
