(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
        .controller('BalanceTableCtrl', BalanceTableCtrl);
  
    /** @ngInject */
    function BalanceTableCtrl($scope) {
        $scope.balanceTableData = [
            {
              image: 'app/browsers/chrome.svg',
              algorithm: 'SHA-256',
              name: 'Bitcoin',
              price: '9843 $',
              change: '12.6 %',
              isChangeUp: true,
              amount: '2.452 BTC'
            }
          ];
    }
})();