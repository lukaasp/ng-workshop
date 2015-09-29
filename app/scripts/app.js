'use strict';

var biometricsApp = angular.module('biometricsApp', [
    // TODO: task3: create your own webcam or ng-file-model directives
  'webcam',
  'ng-file-model',
  'ngRoute',
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
        templateUrl: 'scripts/layouts/get_picture.html'
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
