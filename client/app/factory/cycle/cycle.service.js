'use strict';

angular.module('appChicoApp')
    .service('Cycle', function ($http,$q) {
    // Service logic
    // ...

    this.listCycles=function () {
      var deferred=$q.defer();
      var listCycle=[];
      $http.get('/api/cycles').then(function(list) {
        //console.log("cycle",list);
        listCycle=list.data;
        deferred.resolve(listCycle);

      });
      listCycle=deferred.promise;

      return listCycle;

    }




  });
