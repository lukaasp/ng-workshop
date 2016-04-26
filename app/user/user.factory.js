(function() {

  angular
    .module('user')
    .factory('User', userFactory);

  function userFactory($resource, $http) {
    var users = [];

    return {
      get: getUsers,
      add: addUser,
      delete: deleteUser
    };

    // Example of successful response:
    // [{name:'thename', fileName: 'filename'}, {name:'thename', fileName: 'filename'}, ...]
    function getUsers() {
      return $http.get('/openbr/faces');
    }

    function addUser(userName, userImage) {
      return $http.post('/openbr/faces', {
        name: userName,
        image: userImage
      });
    }

    function deleteUser(userName) {
      return $http.delete('/openbr/faces/' + userName);
    }

  }
})();
