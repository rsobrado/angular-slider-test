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
    $scope.slides = [
      	'images/example-slide-1.jpg',
      	// 'images/example-slide-2.jpg',
      	// 'images/example-slide-3.jpg',
      	// 'images/example-slide-4.jpg'
    ];
  });
