'use strict';

var biometricsControllers = angular.module('biometricsControllers', []);

var strip64 = function(data){
    return data.substr(data.indexOf(';base64,') + ';base64,'.length);
};

biometricsControllers.controller('FileEnrollCtrl', ['$scope', 'Faces',
    function ($scope, Faces) {
        var data = {};

        $scope.getImage = function(obj){
            $scope.fileEnrollStatus = false;
            $scope.isDisabled = false;

            data = obj.imageFile.data;
            $scope.enrollDataURL = data;
        };

        $scope.enrollFile = function(){
            $scope.fileEnrollResponse = Faces.post({name: $scope.fileName, image: strip64(data)});
            $scope.fileEnrollStatus = true;
            $scope.isDisabled = true;
        };
    }]);

biometricsControllers.controller('ListCtrl', ['$scope', 'Faces',
    function ($scope, Faces) {
        $scope.listFaces = function () {
            // TODO: warm-up no.1
            $scope.faces = Faces.get();
        }
    }]);

biometricsControllers.controller('DeleteCtrl', ['$scope', 'User',
    function ($scope, User) {
        $scope.deleteUser = function () {
            User.delete({id: $scope.deleteName}, function (response) {
                // TODO: warm-up no.1
                $scope.response = response;
                $scope.showStatus = true;
            });
        };
    }]);

biometricsControllers.controller('PictureCtrl', ['$scope',
    function ($scope) {
        $scope.getPic = function () {
            //TODO: warm-up no.2
            var name = $scope.picName;

            $scope.path = '/openbr/faces/' + name + '.jpg';
        }
    }]);

biometricsControllers.controller('LiveCaptureCtrl', ['$scope', 'Identify', 'Faces',
    function ($scope, Identify, Faces) {

        $scope.identify = function () {
            $scope.matches = Identify.post({image: $scope.getData()});
        };

        $scope.enroll = function () {
            // TODO: task1: sort response either here or directly in service
            $scope.enrollResponse = Faces.post({name: $scope.liveCaptureName, image:$scope.getData()});
            $scope.enrollStatus = true;
        };

        $scope.getData = function () {
            var video = $scope.identifyChannel.video;
            var canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            var data = canvas.toDataURL('image/jpeg');
            $scope.dataURL = data;
            return strip64(data);
        };

        // TODO: task2: compare 2 shots from camera - requires modifying controller, services and template
    }]);