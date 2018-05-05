(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('balanceTable', balanceTable);

  /** @ngInject */
  function balanceTable() {
    return {
      restrict: 'E',
      controller: 'BalanceTableCtrl',
      templateUrl: 'app/pages/dashboard/balanceTable/balanceTable.html'
    };
  }
})();