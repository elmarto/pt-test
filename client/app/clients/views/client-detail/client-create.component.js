(function() {
  'use strict';

  angular
    .module('app')
    .controller('ClientCreateController', ClientCreateController);

  function ClientCreateController($scope, $mdDialog, $mdToast, ClientService, providers) {
    
    $scope.actionLabel = 'CREATE';

    $scope.client = {
      name: null,
      email: null,
      phone: null,
      providers: null
    }

    $scope.providers = providers.map(function(provider){
      provider.selected = false;
      return provider;
    });

    $scope.closeDialog = function() {
      $mdDialog.hide();
    };

    $scope.submit = function(){
      var clientProspect = angular.copy($scope.client);
      clientProspect.providerIds = $scope.providers.map(function(provider) {
        return (provider.selected) ? provider.id : false;
      }).filter(function(providerId) {
        return providerId;
      });

      ClientService.create(clientProspect).then(function(res){
        $scope.client.providers = $scope.providers;
        $mdToast.show($mdToast.simple().textContent(res.message));
        $mdDialog.hide($scope.client);
      });
    };
  }
})();
