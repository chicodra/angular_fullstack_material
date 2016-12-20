'use strict';

angular.module('appChicoApp')
  .controller('ClasseCtrl', function ($scope, $routeParams, $http, socket,Domaine,Niveau,sousDomaine) {
    $scope.classeLib = $routeParams.classeLib;

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');


    function buildToggler(componentId) {
      return function () {
        $mdSidenav(componentId).toggle();
      }
    }


    // accordion
    function init() {
      var niveaux;
      //console.log('classe log',Niveau.niveau)
      // for(var niveau in Niveau.listNiveau){
      //   if(niveau.label==$scope.classeLib){
      //     niveaux=niveau
      //   }
      // }
      Domaine.listeDomaineByNiveau(Niveau.niveau._id).then(function (listDomaines) {
        $scope.listDomaines=listDomaines;
        console.log("liste cycle",$scope.listDomaines);
        onDomaineClick(listDomaines[0]);
        //clickCycle($scope.listCycles[1]);

      });

    }
    $scope.init=init;
    function onDomaineClick(domaine) {
      sousDomaine.listeDomaineByNiveau(domaine._id).then(function (listSousDomaines) {
        console.log("list sous domaine",listSousDomaines);
        $scope.listSousDomaines=listSousDomaines;

      })



    }
    $scope.onDomaineClick=onDomaineClick;

    $scope.groups = [];
    for (var i = 0; i < 5; i++) {
      $scope.groups[i] = {
        name: i,
        items: []
      };
      for (var j = 0; j < 3; j++) {
        $scope.groups[i].items.push(i + '-' + j);
      }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };

    // FIN accordion


  })

