'use strict';

/* Controllers */

var biometricsControllers = angular.module('biometricsControllers', []);

biometricsControllers.controller('ListCtrl', ['$scope', 'Faces',
    function ($scope, Faces) {
        $scope.listFaces = function(){
            $scope.faces = Faces.get();
        }
    }]);

biometricsControllers.controller('DeleteCtrl', ['$scope', '$routeParams', 'User',
    function($scope, $routeParams, User) {
        $scope.delete = function(){
            User.delete({id: $scope.deleteName}, function(response) {
                $scope.response = response;
                $scope.showStatus = true;
            });
        };
    }]);

biometricsControllers.controller('PictureCtrl', ['$scope',
    function ($scope) {
        $scope.getPic = function(){
            var name = $scope.picName;

            $scope.path = '/openbr/faces/'+name+'.jpg';
        }
    }]);

biometricsControllers.controller('LiveCaptureCtrl', ['$scope', 'Identify',
    function ($scope, Identify) {

        $scope.showIdentify = true;
        $scope.showEnroll = true;
        var video = {};

        $scope.identify = function () {

            video = $scope.identifyChannel.video;
            var canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            var data = canvas.toDataURL('image/jpeg');
            $scope.dataURL = data;
            data = data.substr(data.indexOf(';base64,') + ';base64,'.length);

            $scope.matches = Identify.post(JSON.stringify({'image':data}));
        };

        $scope.enroll = function () {
            video = $scope.identifyChannel.video;
        };
    }]);