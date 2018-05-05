/**
 * @author d.vandermeij
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.miners', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('miners', {
            url: '/miners',
            templateUrl: 'app/pages/miners/miners.html',
            title: 'Miners',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 1,
            },
          });
    }
  
  })();
  