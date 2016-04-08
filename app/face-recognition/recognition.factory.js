(function() {
  'use strict';

  angular
    .module('recognition')
    .factory('Identify', identifyFactory);

  function identifyFactory($resource) {
        return $resource('/openbr/identify', {}, {
          post: {method: 'POST',isArray: true}
        });
      }
})();
