'use strict';

/* App Module */

var biometricsApp = angular.module('biometricsApp', [
  'webcam',
  'ngRoute',
  'ng-file-model',
  'biometricsControllers',
  'biometricsServices'
]);

biometricsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/delete', {
        templateUrl: 'scripts/layouts/delete.html'
      }).
      when('/enroll', {
        templateUrl: 'scripts/layouts/enroll.html'
      }).
      when('/picture', {
        templateUrl: 'scripts/layouts/get_picture.html',
        controller: 'PictureCtrl'
      }).
      when('/list', {
        templateUrl: 'scripts/layouts/list.html'
      }).
      when('/livecapture', {
        templateUrl: 'scripts/layouts/live_capture.html'/*,
        controller: 'LiveCaptureCtrl'*/
      }).
      when('/', {
        templateUrl: 'scripts/layouts/main.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
