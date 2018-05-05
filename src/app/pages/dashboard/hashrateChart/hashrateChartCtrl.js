(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
        .controller('HashrateChartCtrl', HashrateChartCtrl);
  
    /** @ngInject */
    function HashrateChartCtrl($scope, baConfig, $element, layoutPaths) {
        var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          country: 'BTC',
          visits: 3025,
          color: layoutColors.primary
        },
        {
          country: 'BCH',
          visits: 1882,
          color: layoutColors.danger

        },
        {
          country: 'DGB',
          visits: 1809,
          color: layoutColors.info
        },
        {
          country: 'XVG',
          visits: 1322,
          color: layoutColors.success
        },
        {
          country: 'XMR',
          visits: 1122,
          color: layoutColors.warning
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Visitors from country',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'visits'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });
    }
})();