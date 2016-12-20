'use strict';

angular.module('appChicoApp')
  .service('Domaine', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listNiveau=[];
    this.listeDomaineByNiveau=function (id) {
      var deferred=$q.defer();
      var listDomaine=[];
      //console.log(id);
      $http.get('/api/domaines/niveau/'+id ).then(function(listDomaines) {
        console.log("cycle",listDomaines.data);
        listDomaine=listDomaines.data;
        deferred.resolve(listDomaine);

      });
      listDomaine=deferred.promise;
      return listDomaine;




    }
  });
