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

      // TODO: Task 3.4 Identify top matches for captured image
      // HINT: use `sendImage` from ./recognition.factory.js

      // TODO: Task 3.5 Sort matches according to score (resemblance)
      // HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

      // TODO: Task 3.6 Show captured image used for identification
      // TODO: Task 3.7 Show top matched image

    }

    // TODO: Task 3.2 Enroll user using live capture
    // HINT: get user name via ng-model from live-capture.html
    //       use User.add from user/user.factory.js
    //       use getData() to get imageData

    function enroll() {
      // TODO: Task 3.3 Display info about (un)successful enrollment
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
