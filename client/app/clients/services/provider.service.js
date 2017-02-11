(function() {
  'use strict';

  angular
    .module('app')
    .factory('ProviderService', ProviderService);

  function ProviderService($http) {
    var apiHost = 'http://localhost:3000/api/v1';

    var service = {
      all: all,
      create: create,
      edit: edit,
      delete: remove
    };

    return service;

    function all() {
      return $http.get(apiHost + '/providers').then(requestComplete);
    }

    function create(prospect) {
      return $http.post(apiHost + '/providers', prospect).then(requestComplete);
    }

    function edit(prospect) {
      return $http.put(apiHost + '/providers/' + prospect.id, prospect).then(requestComplete);
    }

    function remove(id) {
      return $http.delete(apiHost + '/providers/' + id).then(requestComplete);
    }

    function requestComplete(response) {
      return response.data;
    }
  }
})();
