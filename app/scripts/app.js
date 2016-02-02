'use strict';

/**
 * @ngdoc overview
 * @name alFjrApp
 * @description
 * # alFjrApp
 *
 * Main module of the application.
 */
angular  
  .module('alFjrApp', [
    'ngResource',
    'ui.router', 
    'ngCookies',
    'satellizer'
  ]) 
  .config(function ($locationProvider,$stateProvider,$urlRouterProvider, $authProvider) { 
      
      // Satellizer configuration that specifies which API
      // route the JWT should be retrieved from
      // $authProvider.loginUrl = 'http://api.blue.bluroe.com/api/authenticate';
      $authProvider.baseUrl = 'http://localhost:9000';
      $authProvider.loginUrl = 'http://api.blue.bluroe.com/api/authenticate';
      
      $urlRouterProvider.otherwise('/'); 
 
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('folio', {
          url: '/folio',
          templateUrl: 'views/folio.html',
          controller: 'FolioCtrl',
          controllerAs: 'folio'
        })
        .state('pricing', {
          url: '/pricing',
          templateUrl: 'views/pricing.html',
          controller: 'PricingCtrl',
          controllerAs: 'pricing'
        })
        
  });




$(function() {   
    jQuery.scrollSpeed(100, 800); 
});
  