(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
        .directive('profitChart', profitChart);
  
    /** @ngInject */
    function profitChart() {
      return {
        restrict: 'E',
        controller: 'ProfitChartCtrl',
        templateUrl: 'app/pages/dashboard/profitChart/profitChart.html'
      };
    }
  })();