'use strict';

angular.module('appChicoApp')
  .service('sousDomaine', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeSousDomaineByDomaine=function (id) {
      var deferred=$q.defer();
      var listSousDomaines=[];
      //console.log(id);
      $http.get('/api/sous_domaines/domaine/'+id ).then(function(listSousDomaines) {
        console.log("cycle",listSousDomaines);
        listSousDomaines=listSousDomaines.data;
        deferred.resolve(listSousDomaine);

      });
      listSousDomaines=deferred.promise;
      return listSousDomaines;




    }
  });
