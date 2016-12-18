'use strict';

angular.module('appChicoApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });