(function() {

  angular
    .module('utils', [])
    .factory('Utils', utilsFactory);

  function utilsFactory() {
    return {
        strip64: strip64
      };
  }

  function strip64(data) {
    return data.substr(data.indexOf(';base64,') + ';base64,'.length);
  }
})();
