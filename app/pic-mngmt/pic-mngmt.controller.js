(function() {

  'use strict';

  angular
    .module('pic-mngmt')
    .controller('FileEnrollCtrl', FileEnrollController)
    .controller('PictureCtrl', PictureController);

  //////////

  function FileEnrollController($scope, User, Utils) {
    var data = {};
    $scope.getImage = function(obj) {
      $scope.fileEnrollStatus = false;
      $scope.isDisabled = false;

      data = obj.imageFile.data;
      $scope.enrollDataURL = data;
    };

    $scope.enrollFile = function() {
      $scope.isDisabled = true;
      User.add($scope.fileName, Utils.strip64(data))
          .then(function(result) {
            $scope.fileEnrollStatus = true;
            $scope.fileEnrollResponse = result.data;
            $scope.isDisabled = false;
          }, function(error) {
            console.log('Could not enrol user', $scope.fileName);
            $scope.isDisabled = false;
          });
    };
  }

  function PictureController($scope) {
    $scope.picName = null;
    $scope.picPath = null;
    $scope.getPic = function() {
      // SOLUTION: Task 2.1
      $scope.picPath = '/openbr/faces/' + $scope.picName + '.jpg';
    };
  }
})();
