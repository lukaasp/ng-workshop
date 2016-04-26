(function() {

  angular
      .module('user')
      .controller('UserCtrl', UserController);

  function UserController($scope, User) {
    $scope.faces = [];
    $scope.showButtons = null;
    $scope.deleteUser = deleteUser;
    $scope.listAll = listAll;
    listAll();

    $scope.isDisabled = null;

    function listAll() {
      $scope.isDisabled = true;
      // TODO: Bonus Task 5: Use Toastr to display success/error message
      // HINT: https://github.com/CodeSeven/toastr#3-easy-steps
      User.get().then(function(result) {
        $scope.faces = result.data;
        $scope.isDisabled = false;
      }, function(error) {
        console.log('Could not fetch users.', error);
        $scope.isDisabled = false;
      });
    }

    // SOLUTION: Task 6.1
    function deleteUser(removedUser) {
      // TODO: Bonus Task 5: Use Toastr to display success/error message
      // HINT: https://github.com/CodeSeven/toastr#3-easy-steps
      // SOLUTION: Task 6.2, 6.3
      User.delete(removedUser)
          .then(function(result) {
            $scope.userToDelete = null;
            $scope.deleteResponse = removedUser + ' removed';
          }, function(error) {
            $scope.deleteResponse = 'user ' + removedUser + ' could not be removed';
          });
    }
  }
})();
