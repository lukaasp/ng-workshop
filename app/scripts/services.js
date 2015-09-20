'use strict';

/* Services */

var biometricsServices = angular.module('biometricsServices', ['ngResource']);

biometricsServices.factory('Faces', ['$resource',
  function($resource){
    return $resource('/openbr/faces', {}, {
      get: {method:'GET'},
      post: {method:'POST'}
    });
}]);
