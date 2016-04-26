(function() {

  angular
      .module('user')
      .controller('UserCtrl', UserController);

  function UserController($scope, User) {
    $scope.faces = [];
    $scope.listAll = listAll;
    listAll();

    $scope.isDisabled = null;

    function listAll() {
      $scope.isDisabled = true;
      User.get().then(function(result) {
        $scope.faces = result.data;
        $scope.isDisabled = false;
      }, function(error) {
        console.log('Could not fetch users.', error);
        $scope.isDisabled = false;
      });
    }
  }
})();
