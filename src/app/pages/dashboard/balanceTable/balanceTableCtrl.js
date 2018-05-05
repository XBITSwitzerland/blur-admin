(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.dashboard')
        .controller('BalanceTableCtrl', BalanceTableCtrl);
  
    /** @ngInject */
    function BalanceTableCtrl($scope) {
        $scope.balanceTableData = [
            {
                image: 'app/browsers/bitcoin.jpg',
                algorithm: 'SHA-256',
                name: 'Bitcoin',
                price: '9843 $',
                change: '12.6 %',
                isChangeUp: true,
                amount: '2.452 BTC'
            },
            {
                image: 'app/browsers/litecoin.jpg',
                algorithm: 'SCRYPT',
                name: 'Litecoin',
                price: '140 $',
                change: '12.6 %',
                isChangeUp: true,
                amount: '2.452 LTC'
            },
            {
                image: 'app/browsers/monero.png',
                algorithm: 'Cryptonight',
                name: 'Monero',
                price: '265.43 $',
                change: '12.6 %',
                isChangeUp: true,
                amount: '2.452 BTC'
            },
            {
                image: 'app/browsers/digibyte.png',
                algorithm: 'SHA-256',
                name: 'Digibyte',
                price: '0.078 $',
                change: '12.6 %',
                isChangeUp: true,
                amount: '2.452 BTC'
            },
            {
                image: 'app/browsers/verge.jpg',
                algorithm: 'SCRYPT',
                name: 'Verge',
                price: '0.07 $',
                change: '12.6 %',
                isChangeUp: true,
                amount: '2.452 BTC'
            },
          ];
    }
})();