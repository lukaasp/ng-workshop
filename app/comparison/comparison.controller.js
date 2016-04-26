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
      $scope.isDisabled = null;

      // SOLUTION: Task 5.2
      $scope.setImageForComparison = function(name, image) {
        $scope.image1 = $scope.image2;
        $scope.image2 = {name: name, file: image};
      };

      // SOLUTION: Task 5.1
      $scope.compare = function() {
        var image1 = '/openbr/faces/' + $scope.image1.file;
        var image2 = '/openbr/faces/' + $scope.image2.file;
        $scope.isDisabled = true;
        Comparison
          .compare(image1, image2)
          .then(function(result) {
            $scope.lastResult = result;
            $scope.comparisons.unshift({
              image1: $scope.image1.name,
              image2: $scope.image2.name,
              result: result
            });
            $scope.isDisabled = false;
          }, function(error) {
            console.log('Comparison of', image1, 'and', image2, 'failed.', error);
            $scope.isDisabled = false;
          });
      };
    }
})();
