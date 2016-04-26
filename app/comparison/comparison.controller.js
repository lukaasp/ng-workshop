(function() {

  'use strict';

  angular
    .module('comparison')
    .controller('ComparisonCtrl', ComparisonController);

  function ComparisonController($scope, Comparison) {
      $scope.faces = [];
      $scope.comparisons = [];
      $scope.image1 = {name: 'Albert Einstein', file: 'albert_einstein.jpg'};
      $scope.image2 = {name: 'Emma Watson', file: 'emma_watson.jpg'};
      $scope.lastResult = null;

      // TODO: 5.2 Select user to compare
      //           On click on thumbnail image, set second compared image as first
      //           and clicked image as second
      $scope.setImageForComparison = function(name, image) {
      };

      // TODO: Task 5.1 Compare two users
      // HINT: use `compare` from `comparison.factory.js`
      $scope.compare = function() {
      };
    }
})();
