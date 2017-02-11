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

  this.deleteProvider = function(id) {
    console.log(id);
    ProviderService.delete(id).then(function(res){
      self.providers = self.providers.filter(function(provider){
        return provider.id !== id;
      });
      $mdToast.show($mdToast.simple().textContent(res.message));
    });
  };
}