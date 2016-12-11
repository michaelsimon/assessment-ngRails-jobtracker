(function() {

  'use strict'

  angular
  .module('app', ['ui.router', 'templates','ngSanitize','ngMessages', 'ngMaterial','ngAnimate', 'ngAria'])
  .config(function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  });

}())
