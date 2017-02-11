angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'client-list',
      url: '/clients',
      templateUrl: './app/clients/views/client-list/client-list.component.html',
      controller: 'ClientListController',
      resolve: {
        clientListData: function(ClientService) {
          return ClientService.all();
        }
      }
    });
    
    $urlRouterProvider.otherwise('/clients');
});
