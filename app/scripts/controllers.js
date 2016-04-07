(function() {

  'use strict';

  angular
    .module('biometricsControllers', [])
    .controller('FileEnrollCtrl', FileEnrollController)
    .controller('ListCtrl', ListController)
    .controller('PictureCtrl', PictureController)
    .controller('DeleteCtrl', DeleteController)
    .controller('LiveCaptureCtrl', LiveCaptureController);

  //////////

  function strip64(data) {
    return data.substr(data.indexOf(';base64,') + ';base64,'.length);
  }

  function FileEnrollController($scope, Faces) {
      var data = {};

      $scope.getImage = function(obj) {
        $scope.fileEnrollStatus = false;
        $scope.isDisabled = false;

        data = obj.imageFile.data;
        $scope.enrollDataURL = data;
      };

      $scope.enrollFile = function() {
        $scope.fileEnrollResponse = Faces.post({
          name: $scope.fileName,
          image: strip64(data)
        });
        $scope.fileEnrollStatus = true;
        $scope.isDisabled = true;
      };
    }

  function ListController($scope, Faces) {
      $scope.listFaces = function() {
        $scope.isDisabled = true;

        // TODO: Task no.1.1 - get the list of faces from back-end and assign it to appropriate $scope variable
        $scope.faces = Faces.get({},function() {
          // TODO: Task no.1.2 - In 'Life capture' screen 'identify' button is disabled
          // untill we get the data back from server - do the same for 'list' button in 'List' screen
          $scope.isDisabled = false;
        });

        // TODO: Task no.1.3 currently the list of names is out of bounds
        // in appropriate template decide which tag to use to fit inside of borders

        // solution - swap 'span' for 'label' in list.html

      };
    }

  function PictureController($scope) {
      $scope.getPic = function() {
        //TODO: Task no.2.1 - get the name from text input and use it to assemble path to picture;
        // assign the assembled path to appropriate $scope variable so the picture would be viewed in template
        var name = $scope.picName;

        $scope.path = '/openbr/faces/' + name + '.jpg';

        //TODO: Task no 2.2 - images loaded are out of bounds, make the img responsive
        // solution : class="img-responsive"
      };
    }

  function DeleteController($scope, User) {
      $scope.deleteUser = function() {
        User.delete({id: $scope.deleteName}, function(response) {
          // TODO: Task no.3.1 - item is being deleted - assign response to appropriate $scope variable
          // and show the message in template
          $scope.response = response;
          $scope.showStatus = true;
        });

        // TODO: Task no.3.2 - two-step delete - on 'delete' button click show yes/no buttons,
        // only after clicking 'yes' button proceed with delete
      };
    }

  function LiveCaptureController($scope, Identify, Faces) {

    $scope.identify = function() {

      $scope.isDisabled = true;
      $scope.showTaken = true; //task 4.2

      var data = Identify.post({image: $scope.getData()}, function() {
          $scope.isDisabled = false;

          // TODO: task 4.1 - sort the response according to score
          var sorted = data.sort(function(a, b) {
            return a.score - b.score;
          });
          $scope.matches = sorted.reverse();

          //TODO: task 4.2 - show most similar image

          $scope.showTaken = false;

          $scope.similarPath = '/openbr/faces/' + $scope.matches[0].name + '.jpg';
          $scope.showSimilar = true;
        });
    };

    $scope.enroll = function() {
        $scope.enrollResponse = Faces.post({name: $scope.liveCaptureName, image: $scope.getData()});
        $scope.enrollStatus = true;
      };

    $scope.getData = function() {
        var video = $scope.identifyChannel.video;
        var canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/jpeg');
        $scope.dataURL = data;
        return strip64(data);
      };

    // TODO: task 5: compare 2 shots from camera - requires modifying controller, services and template
  }
})();
