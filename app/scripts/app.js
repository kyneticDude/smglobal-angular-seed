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
  .config(function ($routeProvider, $locationProvider) {

//    $locationProvider.html5Mode(true); // Remove /# from URL

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainController'
      }).when('/solutions', {
        templateUrl: 'views/solutions.html'
      }).when('/audit', {
        templateUrl: 'views/audit.html'
        controller: 'MainController'
      })
      .when('/pricing', {
        templateUrl: 'views/pricing.html'
      }).when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
