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
          .state('compare', {
            url: '/compare',
            templateUrl: 'comparison/compare-users.html',
            controller: 'ComparisonCtrl'
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
