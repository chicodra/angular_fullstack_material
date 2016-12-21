'use strict';

angular.module('appChicoApp')
  .service('Lecon', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listLeconsByChapitre=function (id) {
      var deferred=$q.defer();
      var listLecons=[];
      //console.log(id);
      $http.get('/api/lecons/chapitre/'+id ).then(function(list) {

        listLecons=list.data;
        console.log("lecons",listLecons);
        deferred.resolve(listLecons);

      });
      listLecons=deferred.promise;
      return listLecons;




    }
  });
