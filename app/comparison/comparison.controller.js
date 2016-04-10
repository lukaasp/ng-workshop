(function() {

  'use strict';

  angular
    .module('comparison')
    .controller('ComparisonCtrl', ComparisonController);

  function ComparisonController($scope, Comparison) {
      $scope.comparisons = [];
      $scope.image1 = {name: 'Albert Einstein', file: 'albert_einstein.jpg'};
      $scope.image2 = {name: 'Emma Watson', file: 'emma_watson.jpg'};

      $scope.setImageForComparison = function(name, image) {
        $scope.image1 = $scope.image2;
        $scope.image2 = {name: name, file: image};
      };

      $scope.compare = function() {
        Comparison
          .compare('/openbr/faces/' + $scope.image1.file, '/openbr/faces/' + $scope.image2.file)
          .then(function(result) {
            $scope.lastResult = result;
            $scope.comparisons.unshift({
              image1: $scope.image1.name,
              image2: $scope.image2.name,
              result: result
            });
          })
          .catch(function(err) {
            console.log('got error', err);
          });
      };
    }
})();
