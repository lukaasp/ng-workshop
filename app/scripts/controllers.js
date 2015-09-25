'use strict';

/* Controllers */

var biometricsControllers = angular.module('biometricsControllers', []);

biometricsControllers.controller('ListCtrl', ['$scope', 'Faces',
    function ($scope, Faces) {
        $scope.listFaces = function () {
            $scope.faces = Faces.get();
        }
    }]);

biometricsControllers.controller('DeleteCtrl', ['$scope', 'User',
    function ($scope, User) {
        $scope.deleteUser = function () {
            User.delete({id: $scope.deleteName}, function (response) {
                $scope.response = response;
                $scope.showStatus = true;
            });
        };
    }]);

biometricsControllers.controller('PictureCtrl', ['$scope',
    function ($scope) {
        $scope.getPic = function () {
            var name = $scope.picName;

            $scope.path = '/openbr/faces/' + name + '.jpg';
        }
    }]);

biometricsControllers.controller('LiveCaptureCtrl', ['$scope', 'Identify', 'Faces',
    function ($scope, Identify, Faces) {

        $scope.showIdentify = true;
        $scope.showEnroll = true;
        var video = {};
        var data = {};

        $scope.identify = function () {
            $scope.getData();
            $scope.matches = Identify.post({image: data});
        };

        $scope.enroll = function () {
            $scope.getData();
            $scope.enrollResponse = Faces.post({name: $scope.liveCaptureName, image: data});
            $scope.enrollStatus = true;

        };

        $scope.getData = function () {
            video = $scope.identifyChannel.video;
            var canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            data = canvas.toDataURL('image/jpeg');
            $scope.dataURL = data;
            data = data.substr(data.indexOf(';base64,') + ';base64,'.length);
        };
    }]);