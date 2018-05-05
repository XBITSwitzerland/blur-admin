(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
        .directive('hashrateChart', hashrateChart);
  
    /** @ngInject */
    function hashrateChart() {
      return {
        restrict: 'E',
        controller: 'HashrateChartCtrl',
        templateUrl: 'app/pages/dashboard/hashrateChart/hashrateChart.html'
      };
    }
  })();