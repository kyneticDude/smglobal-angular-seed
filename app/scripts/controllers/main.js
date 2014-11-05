'use strict';

/**
 * @ngdoc function
 * @name smglobalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smglobalApp
 */
angular.module('smglobalApp')
  .controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/partners.json').success(function(data){
    	$scope.partners = data;
    });
    $http.get('js/services.json').success(function(data){
    	$scope.offering = data;
    });
  }]);