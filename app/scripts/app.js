(function() {

  'use strict';

  angular
      .module('biometricsApp', [
          // TODO: task 7 (homework): create your own webcam or ng-file-model directives
        'webcam',
        'ng-file-model',
        'ngRoute',
        'biometricsControllers',
        'biometricsServices'
      ])
      .config(configuration);

  //////////

  function configuration($routeProvider) {
        // TODO: task 6: beautify main layout and/ or partial layouts by using css
        // (including twitter bootstrap), font awesome, or any tricks you wish - todo for me - specify (effects etc.)
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
          when('/docs', {
            templateUrl: 'scripts/layouts/docs.html'
          }).
          when('/', {
            templateUrl: 'scripts/layouts/main.html'
          }).
          otherwise({
            redirectTo: '/'
          });
      }
})();
