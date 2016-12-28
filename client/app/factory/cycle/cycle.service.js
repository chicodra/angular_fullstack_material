'use strict';

angular.module('appChicoApp')
    .service('Cycle', function ($http,$q) {
    // Service logic
    // ...
      this.cycles=null;

    this.listCycles=function () {
      var deferred=$q.defer();
      var listCycle=[];
      $http.get('/api/plcycles').then(function(list) {
        //console.log("cycle",list);
        listCycle=list.data;
        deferred.resolve(listCycle);

      });
      listCycle=deferred.promise;

      return listCycle;

    }




  });
