(function() {

  angular
    .module('recognition')
    .controller('LiveCaptureCtrl', LiveCaptureController);

  function LiveCaptureController($scope, Identify, User, Utils) {
    // Useful for tasks 3.1 - 3.3
    $scope.liveCaptureName = null;
    $scope.enrollResponse = null;

    // Useful for tasks 3.4 - 3.7
    $scope.matches = [];
    $scope.isDisabled = null; // disables button untill matches are returned
    $scope.showTaken = null;  // show captured image used for identification
    $scope.similarPath = null;
    $scope.showSimilar = null;

    $scope.enroll = enroll;
    $scope.identify = identify;

    function identify() {
      $scope.isDisabled = true;
      $scope.showTaken = false;
      $scope.showSimilar = false;

      // SOLUTION: Task 3.4, 3.5, 3.6, 3.7
      Identify.sendImage(getData())
              .then(function(result) {
                $scope.matches = result.data.sort(function(a, b) {
                  return b.score - a.score;
                });
                $scope.isDisabled = false;
                $scope.showTaken = true;
                $scope.showSimilar = true;

              }, function(error) {
                console.log('Problem with user identification.', error);
                $scope.isDisabled = false;
              });
    }

    // SOLUTION: Task 3.2
    function enroll() {
      var userToEnroll = $scope.liveCaptureName;
      $scope.showTaken = false;
      $scope.isDisabled = true;
      User.add(userToEnroll, getData())
          .then(function(result) {
            $scope.enrollResponse = userToEnroll + ' successfully enrolled!';
            $scope.showTaken = true;
            $scope.isDisabled = false;
          }, function(error) {
            $scope.enrollResponse = userToEnroll + ' could not be enrolled.';
            $scope.isDisabled = false;
          });
    }

    // Captures image and returns it's dataUrl
    function getData() {
      var video = $scope.identifyChannel.video;
      var canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 480;
      canvas.getContext('2d')
            .drawImage(video, 0, 0, canvas.width, canvas.height);

      var data = canvas.toDataURL('image/jpeg');
      $scope.dataURL = data;
      return Utils.strip64(data);
    }
  }

})();
