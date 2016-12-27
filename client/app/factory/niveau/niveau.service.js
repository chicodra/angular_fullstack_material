'use strict';

angular.module('appChicoApp')
  .service('Niveau', function ($http,$q) {
    // Service logic
    // ...
    this.listNiveau=[];
    this.niveau=null;

    this.listeNiveauByCycle=function (id) {
      var deferred=$q.defer();
      var listNiveau=[];
      console.log(id);
      $http.get('/api/plniveaux/cycle/'+id ).then(function(listNiveaux) {
        //console.log("cycle",listNiveaux.data);
        listNiveau=listNiveaux.data;
        deferred.resolve(listNiveau);

      });
      listNiveau=deferred.promise;
      return listNiveau;




    }
    this.getNiveauByLabel=function (label) {
      var deferred=$q.defer();
      var niveau=[];
      //console.log(id);
      $http.get('/api/plniveaux/label/'+label ).then(function(niveaux) {
        console.log("niveau",niveaux.data);
        niveau=niveaux.data[0];
        deferred.resolve(niveau);

      });
      niveau=deferred.promise;
      return niveau;




    }



  });
