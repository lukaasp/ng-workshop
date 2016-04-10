(function() {

  'use strict';

  angular
      .module('biometricsApp', [
        'ui.router',
        'ngAnimate',
          // TODO: task 7 (homework): create your own webcam or ng-file-model directives
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
        // TODO: task 6: beautify main layout and/ or partial layouts by using css
        // (including twitter bootstrap), font awesome, or any tricks you wish - todo for me - specify (effects etc.)
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('delete', {
            url: '/delete',
            templateUrl: 'user/delete.html'
          })
          .state('enroll', {
            url: '/enroll',
            templateUrl: 'pic-mngmt/enroll.html'
          })
          .state('picture', {
            url: '/picture',
            templateUrl: 'pic-mngmt/get-picture.html'
          })
          .state('list', {
            url: '/list',
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
