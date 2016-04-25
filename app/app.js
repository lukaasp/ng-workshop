(function() {

  'use strict';

  angular
      .module('biometricsApp', [
        'ui.router',
        'ngAnimate',
        'webcam',
        'ng-file-model',
        'user',
        'recognition',
        'pic-mngmt',
        'comparison',

      ])
      .config(configuration);

  //////////

  function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('enroll', {
            url: '/enroll',
            templateUrl: 'pic-mngmt/enroll.html'
          })
          .state('picture', {
            url: '/picture',
            templateUrl: 'pic-mngmt/get-picture.html'
          })
          .state('compare', {
            url: '/compare',
            templateUrl: 'comparison/compare-users.html',
            controller: 'ComparisonCtrl'
          })
          .state('livecapture', {
            url: '/livecapture',
            templateUrl: 'face-recognition/live-capture.html'
          })
          .state('docs', {
            url: '/docs',
            templateUrl: 'docs/docs.html'
          })
          .state('home', {
            url: '/',
            templateUrl: 'layout/main.html'
          });
      }
})();
