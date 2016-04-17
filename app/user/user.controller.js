(function() {

  angular
      .module('user')
      .controller('UserCtrl', UserController);

  function UserController($scope, User) {
    // TODO: Task no.1.1 - get the list of faces from back-end and assign it to appropriate $scope variable,
    // make the list load at start

    $scope.listAll = listAll();
    listAll();

    function listAll() {
      $scope.isDisabled = true;

      // TODO: Task no.1.2 - In 'Life capture' screen 'identify' button is disabled
      // untill we get the data back from server - do the same for 'list' button in 'List' screen

      User.syncWithRemote().then(function(faces) {
        $scope.faces = faces;
        $scope.isDisabled = false;
      }, function(error) {
        console.log('Could not sync with remote server.');
        console.log(error);
        $scope.faces = [];
        $scope.isDisabled = false;
      });
    }

    $scope.deleteUser = function(nameToDelete) {
      $scope.showStatus = false;
      $scope.showError = false;

      User.deleteUser(nameToDelete).then(function(response) {
        // TODO: Task no.3.1 - item is being deleted - assign response to appropriate $scope variable
        // and show the message in template
        $scope.response = response;
        $scope.showStatus = true;
        // TODO: Task no.3.3 - catch error response
      }, function(error) {
        // TODO: Task no 7 - use toastr to add some funny error message
        toastr.warning('','',{closeButton:true,closeHtml:'<img src="/pics/no.jpg" height="200" width="200">'});
        $scope.errorResponse = error.data;
        $scope.showError = true;
      });

      // TODO: Task no.3.3 - two-step delete - on 'delete' button click show yes/no buttons,
      // only after clicking 'yes' button proceed with delete
    };
  }
})();
