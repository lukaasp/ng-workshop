(function() {

  angular
      .module('user')
      .controller('UserCtrl', UserController);

  function UserController($scope, User) {
      // TODO: Task no.1.1 - get the list of faces from back-end and assign it to appropriate $scope variable,
     // make the list load at start
    $scope.listFaces = listAll();
    listAll();

    function listAll() {
      $scope.isDisabled = true;

      $scope.faces = User.get({}, function() {
        // TODO: Task no.1.2 - In 'Life capture' screen 'identify' button is disabled
        // untill we get the data back from server - do the same for 'list' button in 'List' screen
        $scope.isDisabled = false;
      });
    }

    $scope.deleteUser = function(nameToDelete) {
      $scope.showStatus = false;
      $scope.showError = false;

      User.delete({id: nameToDelete}, function(response) {
        // TODO: Task no.3.1 - item is being deleted - assign response to appropriate $scope variable
        // and show the message in template
        $scope.response = response;
        $scope.showStatus = true;
        var userToDelete = $scope.faces.filter(function(face) {
          return face.name === nameToDelete;
        });
        console.log(userToDelete);
        userToDelete.forEach(function(face) {
                  var i = $scope.faces.indexOf(face);
                  console.log('index', i);
                  if (i > -1) {
                    $scope.faces.splice(i, 1);
                  }
                  console.log($scope.faces.length);
                });

                // TODO: Task no.3.1 - catch error response
      }, function(error) {

        $scope.errorResponse = error.data;
        $scope.showError = true;
      });

      // TODO: Task no.3.3 - two-step delete - on 'delete' button click show yes/no buttons,
      // only after clicking 'yes' button proceed with delete
    };
  }
})();