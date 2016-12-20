'use strict';

angular.module('appChicoApp')
  .service('Niveau', function ($http,$q) {
    // Service logic
    // ...
    this.listNiveau=[];
    this.niveau=[];

    this.listeNiveauByCycle=function (id) {
      var deferred=$q.defer();
      var listNiveau=[];
      //console.log(id);
      $http.get('/api/niveaus/cycle/'+id ).then(function(listNiveaux) {
        //console.log("cycle",listNiveaux.data);
        listNiveau=listNiveaux.data;
        deferred.resolve(listNiveau);

      });
      listNiveau=deferred.promise;
      return listNiveau;




    }

  });
