(function() {

  angular
      .module('user')
      .controller('UserCtrl', UserController);

  function UserController($scope, User) {
    // TODO: Task no.1.1:
    //       Get the list of faces from back-end
    //       and assign it to appropriate $scope variable, make the list load at start
    // HINT: https://docs.angularjs.org/api/ng/service/$http
    //       https://docs.angularjs.org/api/ng/directive/ngClick
    $scope.faces = [];
    $scope.listAll = listAll;

    // TODO: Task no.1.2
    //       Disable 'List' button until we get data back from server
    // HINT: https://docs.angularjs.org/api/ng/directive/ngDisabled
    $scope.isDisabled = null;

    function listAll() {

    }
  }
})();
