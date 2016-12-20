'use strict';

angular.module('appChicoApp')
  .factory('Niveau', function ($http,$q) {
    // Service logic
    // ...

    var niveau={};
    niveau.listeNiveauByCycle=function (id) {
      var deferred=$q.defer();
      var listNiveau=[];
      console.log(id);
      $http.get('/api/niveaus/cycle',id).then(function(listNiveau) {
        console.log("cycle",listNiveau);
        listNiveau=listNiveau.data;
        deferred.resolve(listNiveau);

      });
      listNiveau=deferred.promise;

      return listNiveau;




    }
    return niveau;

  });
