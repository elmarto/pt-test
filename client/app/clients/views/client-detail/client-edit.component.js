(function() {
  'use strict';

  angular
    .module('app')
    .controller('ClientEditController', ClientEditController);

  function ClientEditController($scope, $mdDialog, $mdToast, ClientService, providers, client) {
    
    $scope.actionLabel = 'EDIT';

    $scope.client = client;

    $scope.closeDialog = function() {
      $mdDialog.hide();
    };

    $scope.providers = providers.map(function(provider){
      
      provider.selected = false;
      client.providers.forEach(function(clientProvider) {
        if (clientProvider.id === provider.id) {
          provider.selected = true;
        }
      });
      return provider
    });

    $scope.submit = function(){
      var client = $scope.client;
      var clientProspect = {
        id: client.id,
        name: client.name,
        phone: client.phone,
        email: client. email,
        providerIds: $scope.providers.map(function(provider) {
          return (provider.selected) ? provider.id : false;
        }).filter(function(providerId) {
          return providerId;
        })
      };

      ClientService.edit(clientProspect).then(function(res){
        $mdToast.show($mdToast.simple().textContent(res.message));

        $scope.client.providers = $scope.providers.map(function(provider) {
            return (provider.selected) ? provider : false;
          }).filter(function(providerId) {
            return providerId;
          });
        $mdDialog.hide($scope.client);
      });
    };
  }
})();
