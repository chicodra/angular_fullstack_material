'use strict';

angular.module('appChicoApp')
  .service('Chapitre', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeChapitresByMatiere=function (id) {
      var deferred=$q.defer();
      var listChapitres=[];
      //console.log(id);
      $http.get('/api/chapitres/matiere/'+id ).then(function(list) {

        listChapitres=list.data;
        console.log("chapitres",listChapitres);
        deferred.resolve(listChapitres);

      });
      listChapitres=deferred.promise;
      return listChapitres;




    }
  });
