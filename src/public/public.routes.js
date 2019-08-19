(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'public/home/home.html'
    })
    .state('public.weight', {
      url: '/weight',
      templateUrl: 'public/weight/weight.html',
      controller: 'WeightController as wgtCtrl'
    })
    .state('public.outcontroll', {
      url: '/outcontroll',
      templateUrl: 'public/outcontroll/outcontroll.html',
      controller: 'OutControllController as outCtrl',
      resolve: {
        container: ['DataService', function (DataService) {
          return DataService.getContainer();
        }]
      }
    });

  }


})();
