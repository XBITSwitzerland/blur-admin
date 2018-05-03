/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper) {

      $scope.transparent = baConfig.theme.blur;
      var dashboardColors = baConfig.colors.dashboard;
      $scope.doughnutData = {
          labels: [
              'Antminer S9',
              'Antminer L3+',
              'Antminer E3',
              'Miningrigs',
              'Antminer D3'
          ],
          datasets: [
              {
                  data: [10, 3, 7, 12, 1],
                  backgroundColor: [
                      dashboardColors.white,
                      dashboardColors.blueStone,
                      dashboardColors.surfieGreen,
                      dashboardColors.silverTree,
                      dashboardColors.gossip

                  ],
                  hoverBackgroundColor: [
                      colorHelper.shade(dashboardColors.white, 15),
                      colorHelper.shade(dashboardColors.blueStone, 15),
                      colorHelper.shade(dashboardColors.surfieGreen, 15),
                      colorHelper.shade(dashboardColors.silverTree, 15),
                      colorHelper.shade(dashboardColors.gossip, 15)
                  ],
                  percentage: [10, 3, 7, 12, 1]
              }]
      };

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, {
          type: 'doughnut',
          data: $scope.doughnutData,
          options: {
              cutoutPercentage: 64,
              responsive: true,
              elements: {
                  arc: {
                      borderWidth: 0
                  }
              }
          }
      });
  }
})();