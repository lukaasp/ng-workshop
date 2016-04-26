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
      User.get().then(function(result) {
        $scope.faces = result.data;
        $scope.isDisabled = false;
      }, function(error) {
        console.log('Could not fetch users.', error);
        $scope.isDisabled = false;
      });
    }

    // TODO: Task 6.1 Delete user
    // HINT: use ng-model to get user's name
    //       use `delete` from `user.factory.js`
    function deleteUser() {
      // TODO: Task 6.2 Delete user only after confirmation
      // HINT: use ng-show to display YES/NO buttons
      //       use ng-click to handle deleting user on YES button

      //TODO: Task 6.3 Display information about deletion process
    }
  }
})();
