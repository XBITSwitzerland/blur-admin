/**
 * @author d.vandermeij
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.hosting', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('hosting', {
            url: '/hosting',
            templateUrl: 'app/pages/miners/hosting.html',
            title: 'Hosting',
            sidebarMeta: {
              icon: 'ion-calendar',
              order: 1,
            },
          });
    }
  
  })();
  