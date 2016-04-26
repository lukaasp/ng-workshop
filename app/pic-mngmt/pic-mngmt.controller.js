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
    $scope.getPic = function() {
      // TODO: Task 2.1
      //       Get the name from text input and use it to assemble path to picture.
      //       Assign the assembled path to appropriate $scope variable so the picture would be viewed in template
      // HINT: https://docs.angularjs.org/api/ng/directive/ngModel

      // TODO: Task 2.2
      //       Image loaded is out of bounds, make the img responsive
      // HINT: http://getbootstrap.com/css/#images-responsive
    };
  }
})();
