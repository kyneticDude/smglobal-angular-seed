'use strict';

/**
 * @ngdoc function
 * @name smglobalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smglobalApp
 */
angular.module('smglobalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
