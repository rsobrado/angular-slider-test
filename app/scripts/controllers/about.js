'use strict';

/**
 * @ngdoc function
 * @name sliderTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sliderTestApp
 */
angular.module('sliderTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
