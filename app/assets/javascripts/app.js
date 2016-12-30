(function() {

  'use strict'

  angular
  .module('app', ['ui.router', 'templates','ngSanitize','ngMessages', 'ngMaterial','ngAnimate', 'ngAria','Devise'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  });

  angular
  .module('app')
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireAuth = toState.data.requireAuth;
      // debugger
      if (requireAuth && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('jobs.login');
      }
    });

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

}())
