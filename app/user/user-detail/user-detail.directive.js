(function() {

  'use strict';

  angular
    .module('user')
    .directive('userDetail', userDetail);

  function userDetail() {
      // TODO: Task 4.1 Create custom directive
      //       that displays user name and user picture
      // HINT: it's element directive
      //       it has two scope properties userName and userPic
      //       https://docs.angularjs.org/guide/directive
    }

  function UserDetailController() {
    var vm = this;
  }

})();
