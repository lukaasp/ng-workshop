(function() {

  'use strict';

  angular
    .module('user')
    .directive('userDetail', userDetail);

  function userDetail() {
    // SOLUTION: Task 4.1

    var directive = {
        bindToController: true,
        scope: {
          userName: '@',
          userPic: '@'
        },
        controller: UserDetailController,
        controllerAs: 'userDetailVm',
        restrict: 'E',
        templateUrl: 'user/user-detail/user-detail.template.html'
      };

    return directive;
  }

  function UserDetailController() {
    var vm = this;
  }

})();
