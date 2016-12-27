'use strict';

angular.module('appChicoApp')
  .service('Matiere', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeMatieresBySousDomaines=function (id) {
      var deferred=$q.defer();
      var listMatieres=[];
      //console.log(id);
      $http.get('/api/pvfils/parent/'+id ).then(function(list) {
        console.log("matieres",list);
        listMatieres=list.data;
        deferred.resolve(listMatieres);

      });
      listMatieres=deferred.promise;
      return listMatieres;




    }
  });
