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
          visits: 135,
          color: '#F8A23B'
        },
        {
          country: 'BCH',
          visits: 70,
          color: layoutColors.success

        },
        {
          country: 'DGB',
          visits: 27,
          color: '#2E67B2'
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Hashrate (TH/s)',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]] TH/s</b>',
          fillColorsField: 'color',
          fillAlphas: 1,
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