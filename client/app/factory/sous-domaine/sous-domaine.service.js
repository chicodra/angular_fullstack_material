'use strict';

angular.module('appChicoApp')
  .service('sousDomaine', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeSousDomaineByDomaine=function (id) {
      var deferred=$q.defer();
      var listSousDomaine=[];
      console.log(id);
      $http.get('/api/pvparent/domaine/'+id ).then(function(listSousDomaines) {
        console.log("sous domaine",listSousDomaines);
        listSousDomaine=listSousDomaines.data;
        deferred.resolve(listSousDomaine);

      });
      listSousDomaine=deferred.promise;
      return listSousDomaine;




    }
  });
