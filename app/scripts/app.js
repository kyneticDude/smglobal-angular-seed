'use strict';

/**
 * @ngdoc overview
 * @name smglobalApp
 * @description
 * # smglobalApp
 *
 * Main module of the application.
 */
angular
  .module('smglobalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      }).when('/solutions', {
        templateUrl: 'views/solutions.html'
      }).when('/pricing', {
        templateUrl: 'views/pricing.html'
      }).when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
