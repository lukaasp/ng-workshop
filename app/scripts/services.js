(function() {

  'use strict';

  angular
    .module('biometricsServices', ['ngResource'])
    .factory('Faces', faces)
    .factory('Identify', identify)
    .factory('User', user);

  //////////

  function faces($resource) {
    return $resource('/openbr/faces', {}, {
      get: {method: 'GET',isArray: true},
      post: {method: 'POST'}
    });
  }

  function identify($resource) {
    return $resource('/openbr/identify', {}, {
      post: {method: 'POST',isArray: true}
    });
  }

  function user($resource) {
    return $resource('/openbr/faces/:id', {}, {
      delete: {method: 'DELETE'}
    });
  }

})();
