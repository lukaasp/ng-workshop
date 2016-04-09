(function() {

  'use strict';

  angular
      .module('biometricsApp', [
          // TODO: task 7 (homework): create your own webcam or ng-file-model directives
        'webcam',
        'ng-file-model',
        'ngRoute',
        'user',
        'recognition',
        'pic-mngmt'
      ])
      .config(configuration);

  //////////

  function configuration($routeProvider) {
        // TODO: task 6: beautify main layout and/ or partial layouts by using css
        // (including twitter bootstrap), font awesome, or any tricks you wish - todo for me - specify (effects etc.)
        $routeProvider.
          when('/delete', {
            templateUrl: 'user/delete.html'
          }).
          when('/enroll', {
            templateUrl: 'pic-mngmt/enroll.html'
          }).
          when('/picture', {
            templateUrl: 'pic-mngmt/get-picture.html'
          }).
          when('/list', {
            // templateUrl: 'user/user-list.html'
            templateUrl: 'user/enrolled-users.html',
            controller: 'UserCtrl'
          }).
          when('/livecapture', {
            templateUrl: 'face-recognition/live-capture.html'/*,
            controller: 'LiveCaptureCtrl'*/
          }).
          when('/docs', {
            templateUrl: 'docs/docs.html'
          }).
          when('/', {
            templateUrl: 'layout/main.html'
          }).
          otherwise({
            redirectTo: '/'
          });
      }
})();
