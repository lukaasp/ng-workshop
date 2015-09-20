'use strict';

/* Controllers */

var biometricsControllers = angular.module('biometricsControllers', []);

biometricsControllers.controller('ListCtrl', ['$scope', 'Faces',
  function($scope, Faces) {
    //$scope.faces = Faces.get();
  }]);

biometricsControllers.controller('LiveCaptureCtrl', ['$scope', 'Faces',
  function($scope, Faces) {

      $scope.showIdentify = true;
      $scope.showEnroll = true;
      var video = {};

      $scope.identify = function(){

          video = $scope.identifyChannel.video;
          var canvas = document.createElement('canvas');

          canvas.getContext('2d').drawImage(video, 0, 0, 200, 200);

          var data = canvas.toDataURL('image/jpeg');
          $scope.dataURL = data;
          console.log(data);
          data = data.substr(data.indexOf(';base64,') + ';base64,'.length);

          //$scope.faces = Faces.post();

      };

      $scope.enroll = function(){
          video = $scope.identifyChannel.video;
          console.log('eeeeeee');
      };

  }]);