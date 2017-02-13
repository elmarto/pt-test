angular.module('app')

.component('providerWidget', {
  bindings: {
    providers: '='
  },
  controller: ProviderWidgetController,
  templateUrl: './app/clients/components/provider-widget/provider-widget.component.html'
});

function ProviderWidgetController($scope, $mdToast, ProviderService) {
  var self = this;
  
  this.addProvider = function(provider) {
    ProviderService.create(provider).then(function(res){
      self.providers.push(res.provider);
      $mdToast.show($mdToast.simple().textContent(res.message));
    });
  };

  this.editProvider = function(selectedProvider) {
    var selectedProviderCopy = angular.copy(selectedProvider);
    selectedProviderCopy.name = prompt('Insert a new name for the selected provider');
    ProviderService.edit(selectedProviderCopy).then(function(res){
      $mdToast.show($mdToast.simple().textContent(res.message));
      selectedProvider.name = selectedProviderCopy.name
    });
  };

  this.deleteProvider = function(id) {
    ProviderService.delete(id).then(function(res){
      self.providers = self.providers.filter(function(provider){
        return provider.id !== id;
      });
      $mdToast.show($mdToast.simple().textContent(res.message));
    });
  };
}