(function() {
  'use strict';

  angular
    .module('app')
    .controller('ClientListController', ClientListController);

  function ClientListController($scope, $mdDialog, $mdToast, ClientService, clientListData) {
    $scope.tableOptions = {
      rowHeight: 50,
      headerHeight: 50,
      footerHeight: false,
      scrollbarV: false,
      selectable: false
    };

    $scope.clients = clientListData.clients;
    $scope.providers = clientListData.providers;

    $scope.openEditDialog = function($event, client) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: './app/clients/views/client-detail/client-detail.component.html',
         locals: {
           client: angular.copy(client),
           providers: $scope.providers
         },
         controller: 'ClientEditController'
      }).then(function(newclient) {
        $scope.clients = $scope.clients.map(function(client){
          return (client.id === newclient.id) ? newclient : client;
        });
      });
    };

    $scope.openCreateDialog = function($event, clientProviders) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: './app/clients/views/client-detail/client-detail.component.html',
         locals: {
           providers: $scope.providers
         },
         controller: 'ClientCreateController'
      }).then(function(newclient) {
        console.log(newclient);
        $scope.clients.push(newclient);
      });
    };

    $scope.deleteClient = function(id) {
      ClientService.delete(id).then(function(res){
        $mdToast.show($mdToast.simple().textContent(res.message));
        $scope.clients = $scope.clients.filter(function(client){
          return client.id !== id;
        });
      });
    };
  }
})();
