(function() {

  angular
    .module('recognition')
    .controller('LiveCaptureCtrl', LiveCaptureController);

  function LiveCaptureController($scope, Identify, User, Utils) {

    $scope.identify = function() {

      $scope.isDisabled = true;
      $scope.showTaken = true; //task 4.2

      Identify.post({image: getData()}, function(data) {
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

      //TODO: task 5 - implement form validation in live-capture.html id="liveCaptureName" - disable enroll button on
      // validation error

    $scope.enroll = function() {
      $scope.enrollStatusOK = false;
      $scope.enrollStatusError = false;

      User.addUser($scope.liveCaptureName, getData()).then(function(data) {
        $scope.enrollResponseOK = data;
        $scope.enrollStatusOK = true;
        $scope.liveCaptureName = '';
      }, function(error) {
        $scope.enrollResponseError = error;
        $scope.enrollStatusError = true;
      });
    };

    function getData() {
          var video = $scope.identifyChannel.video;
          var canvas = document.createElement('canvas');
          canvas.width = 640;
          canvas.height = 480;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

          var data = canvas.toDataURL('image/jpeg');
          $scope.dataURL = data;
          return Utils.strip64(data);
        }
  }

})();
