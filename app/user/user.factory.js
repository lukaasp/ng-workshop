(function() {

  angular
    .module('user')
    .factory('User', userFactory);

  function userFactory($resource, $q) {
    var users = [];

    var UserResource =  $resource('/openbr/faces/:id', {id: '@id'}, {
      get: {method: 'GET', isArray: true},
      post: {method: 'POST'},
      delete: {method: 'DELETE'}
    });

    function listUsers() {
      return users;
    }

    function syncWithRemote() {
      var deferred = $q.defer();
      UserResource.get({}, function(result) {
        users = result;
        deferred.resolve(result);
      }, function(error) {
        users = [];
        deferred.reject([]);
      });
      return deferred.promise;
    }

    function addUser(userName, userImage) {
      var deferred = $q.defer();
      UserResource.post({name: userName, image: userImage}, function(enrolledName) {
        users.unshift({name: userName, fileName: enrolledName + '.jpg'});
        deferred.resolve(enrolledName);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function deleteUser(userName) {
      var deferred = $q.defer();
      UserResource.delete({id: userName}, function(response) {
        // TODO: Task no.3.1 - item is being deleted - assign response to appropriate $scope variable
        // and show the message in template
        users.splice(users.indexOf({name: userName, fileName: userName + '.jpg'}), 1);
        deferred.resolve(userName);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

    return {
      listUsers: listUsers,
      syncWithRemote: syncWithRemote,
      addUser: addUser,
      deleteUser: deleteUser
    };
  }
})();
