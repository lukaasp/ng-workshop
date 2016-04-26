(function() {

  angular
    .module('user')
    .factory('User', userFactory);

  function userFactory($http) {
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

    // TODO: Bonus Task 1: Update list of users on every successful enrollment
    // HINT: don't send directly $http promise,
    //       take care of it inside this function
    //       update users
    //       and then use $q to delegate promise further
    //       https://docs.angularjs.org/api/ng/service/$q
    function addUser(userName, userImage) {
      return $http.post('/openbr/faces', {
        name: userName,
        image: userImage
      });
    }

    // TODO: Bonus Task 2: Update list of users on every successful removal
    // HINT: don't send directly $http promise,
    //       take care of it inside this function
    //       update users
    //       and then use $q to delegate promise further
    //       https://docs.angularjs.org/api/ng/service/$q
    function deleteUser(userName) {
      return $http.delete('/openbr/faces/' + userName);
    }

  }
})();
