(function() {

  angular
    .module('user')
    .controller('UserCtrl', UserController);

  function UserController($scope, User) {

    $scope.faces = [];

    activate();

    function activate() {
      User.get({},function(data) {
        $scope.faces = data.filter(function(d) {
          return d.fileName !== 'undefined.jpg';
        });
        // TODO: Task no.1.2 - In 'Life capture' screen 'identify' button is disabled
        // untill we get the data back from server - do the same for 'list' button in 'List' screen
        $scope.isDisabled = false;

      });
    }

    $scope.listFaces = function() {
      $scope.isDisabled = true;

      // TODO: Task no.1.1 - get the list of faces from back-end and assign it to appropriate $scope variable
      $scope.faces = User.get({},function() {
        // TODO: Task no.1.2 - In 'Life capture' screen 'identify' button is disabled
        // untill we get the data back from server - do the same for 'list' button in 'List' screen
        $scope.isDisabled = false;
      });

      // TODO: Task no.1.3 currently the list of names is out of bounds
      // in appropriate template decide which tag to use to fit inside of borders

      // solution - swap 'span' for 'label' in list.html

    };
    $scope.deleteUser = function() {
      User.delete({id: $scope.deleteName}, function(response) {
        // TODO: Task no.3.1 - item is being deleted - assign response to appropriate $scope variable
        // and show the message in template
        $scope.response = response;
        $scope.showStatus = true;
      });

      // TODO: Task no.3.2 - two-step delete - on 'delete' button click show yes/no buttons,
      // only after clicking 'yes' button proceed with delete
    };
  }
})();
