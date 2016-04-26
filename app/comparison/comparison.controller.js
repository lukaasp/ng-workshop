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
      //
      $scope.setImageForComparison = function(name, image) {
      };

      $scope.compare = function() {
      };
    }
})();
