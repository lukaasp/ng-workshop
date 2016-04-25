(function() {

  'use strict';

  angular
    .module('user')
    .directive('userDetail', userDetail);

  function userDetail() {
      // TODO: task no 7 - implement user-detail directive
      /*var directive = {
        bindToController: true,
        scope: {
          userName: '@', //TODO:ZH
          userPic: '@'
        },
        controller: UserDetailController,
        controllerAs: 'userDetailVm',
        link: link,
        restrict: 'E',
        templateUrl: 'user/user-detail/user-detail.template.html'
      };

      function link(scope, element, attrs) {
      }

      return directive;*/
    }

  function UserDetailController() {
    var vm = this;
  }

})();
