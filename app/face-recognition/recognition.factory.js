(function() {
  'use strict';

  angular
    .module('recognition')
    .factory('Identify', identifyFactory);

  function identifyFactory($http) {
    return {
      sendImage: sendImage
    };

    // Sends image for identification
    // Response example: [{name: 'thename1', score: score1}, {name: 'thename2', score: score2},...]
    function sendImage(imageData) {
      return $http.post('/openbr/identify', {
        image: imageData
      });
    }
  }
})();
