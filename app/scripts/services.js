'use strict';

var biometricsServices = angular.module('biometricsServices', ['ngResource']);

biometricsServices.factory('Faces', ['$resource',
  function($resource){
    return $resource('/openbr/faces', {}, {
      get: {method:'GET',isArray:true},
      post: {method:'POST'}
    });
}]);

biometricsServices.factory('Identify', ['$resource',
    function($resource){
        return $resource('/openbr/identify', {}, {
            post: {method:'POST',isArray:true}
        });
}]);

biometricsServices.factory('User', ['$resource',
    function($resource){
        return $resource('/openbr/faces/:id', {}, {
            delete: {method:'DELETE'}
        });
    }]);