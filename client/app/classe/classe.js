'use strict';

angular.module('appChicoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/classe/:classeLib', {
        templateUrl: 'app/classe/classe.html',
        controller: 'ClasseCtrl'
      });
  });

