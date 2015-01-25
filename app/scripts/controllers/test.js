'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('TestCtrl', function ($scope, Questionnaires) {
    $scope.questionnaires = Questionnaires.getArray();

    $scope.next = function () {
      if ( $scope.index === $scope.questionnaires.length-1 ) return;

      $scope.index++;
    }

    $scope.previous = function () {
      if ( $scope.index === 0 ) return;

      $scope.index--;
    }

  });
