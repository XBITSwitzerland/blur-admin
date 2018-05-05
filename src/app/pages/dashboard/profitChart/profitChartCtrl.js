/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
      .controller('ProfitChartCtrl', ProfitChartCtrl);
  
    /** @ngInject */
    function ProfitChartCtrl($scope, $window, baConfig) {
      var layoutColors = baConfig.colors;
      $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
      $scope.lineData = [
        {y: "01.05.2018", a: 155},
        {y: "02.05.2018", a: 145},
        {y: "03.05.2018", a: 160},
        {y: "04.05.2018", a: 150},
        {y: "05.05.2018", a: 159},
        {y: "06.05.2018", a: 150},
        {y: "07.05.2018", a: 147}
      ];
  
      angular.element($window).bind('resize', function () {
        //$window.Morris.Grid.prototype.redraw();
      });
    }
  
  })();