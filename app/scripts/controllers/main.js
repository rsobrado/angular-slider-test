'use strict';

/**
 * @ngdoc function
 * @name sliderTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliderTestApp
 */
angular.module('sliderTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
