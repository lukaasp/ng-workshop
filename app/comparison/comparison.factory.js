(function() {

  'use strict';

  angular
    .module('comparison')
    .factory('Comparison', comparisonFactory);

  function comparisonFactory($http, $q, Utils) {

    return {
      compare: compare
    };

    // returns promise, that is either
    // resolved sucessfully to calculated value of resemblance between two images
    // or rejected with error message
    function compare(image1, image2) {
      var deferred = $q.defer();

      var promise1 = getBase64Image(image1);
      var promise2 = getBase64Image(image2);

      $q.all([promise1, promise2]).then(function(resolved) {
        var postData = {
          image1: resolved[0],
          image2: resolved[1]
        };
        $http.post('/openbr/compare', postData)
             .then(function(result) {
                deferred.resolve(result.data);
              })
             .catch(function(err) {
                deferred.reject(err.data.message);
              });
      })
      .catch(function(err) {
        deferred.reject('Nay :(');
      });
      return deferred.promise;
    }

    function getBase64Image(image) {
      var deferred = $q.defer();
      encodeImage(image, function(base64Img) {
        deferred.resolve(base64Img);
      });
      return deferred.promise;
    }

    function encodeImage(url, callback, outputFormat) {
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = 240;
        canvas.width = 360;
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        dataURL = canvas.toDataURL('image/jpeg');
        callback(Utils.strip64(dataURL));
        canvas = null;
      };
      img.src = url;
    }
  }
})();
