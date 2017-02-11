(function() {
  'use strict';

  angular
    .module('app')
    .factory('ClientService', ClientService);

  function ClientService($http) {
    var apiHost = 'http://localhost:3000/api/v1';

    var service = {
      all: all,
      create: create,
      edit: edit,
      delete: remove
    };

    return service;

    function all() {
      return $http.get(apiHost + '/clients').then(requestComplete);
    }

    function create(prospect) {
      return $http.post(apiHost + '/clients', prospect).then(requestComplete);
    }

    function edit(prospect) {
      return $http.put(apiHost + '/clients/' + prospect.id, prospect).then(requestComplete);
    }

    function remove(id) {
      return $http.delete(apiHost + '/clients/' + id).then(requestComplete);
    }

    function requestComplete(response) {
      return response.data;
    }
  }
})();
