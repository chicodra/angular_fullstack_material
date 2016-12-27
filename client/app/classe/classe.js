'use strict';

angular.module('appChicoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:cycle/:classeLib', {
        templateUrl: 'app/classe/classe.html',
        controller: 'ClasseCtrl'
      });
  });

