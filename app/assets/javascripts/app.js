(function() {

  'use strict'

  angular
  .module('app', ['ui.router', 'templates','ngSanitize','ngMessages', 'ngMaterial','ngAnimate', 'ngAria','Devise'])
  .config(['$httpProvider','$mdThemingProvider',function($httpProvider, $mdThemingProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('grey');
  }]);

}())
