(function() {

  angular
    .module('user')
    .factory('User', userFactory);

  function userFactory($resource) {
      return $resource('/openbr/faces/:id', {id: '@id'}, {
         get: {method: 'GET',isArray: true},
         post: {method: 'POST'},
         delete: {method: 'DELETE'}
       });
    }
})();
