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
        $scope.fileEnrollResponse = User.addUser($scope.fileName, Utils.strip64(data));
        $scope.fileEnrollStatus = true;
        $scope.isDisabled = true;
      };
    }

  function PictureController($scope) {
      $scope.getPic = function() {
        //TODO: Task no.2.1 - get the name from text input and use it to assemble path to picture
        // assign the assembled path to appropriate $scope variable so the picture would be viewed in template
        var name = $scope.picName;

        $scope.path = '/openbr/faces/' + name + '.jpg';

        //TODO: Task no 2.2 - images loaded are out of bounds, make the img responsive
        // solution : class="img-responsive"
      };
    }
})();
