let app = angular.module('app', [
  'ui.router',
  'ngMaterial',
  'data-table'
]);

angular
  .module('app')
  .config(function ($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  }); 