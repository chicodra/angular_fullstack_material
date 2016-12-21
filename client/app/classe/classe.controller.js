'use strict';

angular.module('appChicoApp')
  .controller('ClasseCtrl', function ($scope, $routeParams, $http, socket, Domaine, Niveau, sousDomaine, Matiere, Chapitre, Lecon) {
    $scope.classeLib = $routeParams.classeLib;
    $scope.visible = false;
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');


    function buildToggler(componentId) {
      return function () {
        $mdSidenav(componentId).toggle();
      }
    }


    // accordion
    function init() {

      Domaine.listeDomaineByNiveau(Niveau.niveau._id).then(function (listDomaines) {
        $scope.listDomaines = listDomaines;
        console.log("liste domaines", $scope.listDomaines);
        //domaineClick($scope.listDomaines[0]);
        //clickCycle($scope.listCycles[1]);

      });

    }
    $scope.init = init();

    function domaineClick(domaine) {
      initParams();
      $scope.listSousDomaines = [];
      console.log("on domaine click", domaine);
      sousDomaine.listeSousDomaineByDomaine(domaine._id).then(function (listSousDomaines) {
        console.log("list sous domaine", listSousDomaines);
        $scope.listSousDomaines = listSousDomaines;
        // sousDomaineClick(listSousDomaines[0]);

      });



    }

    //domaineClick($scope.listDomaines[0]);
    $scope.domaineClick = domaineClick;

    function sousDomaineClick(sousdomaine) {
      $scope.listChapitres=[];
      Matiere.listeMatieresBySousDomaines(sousdomaine._id).then(function (listMatieres) {
        console.log("list matieres", listMatieres);
        $scope.listMatieres = listMatieres;
        //MatiereClick(listMatieres[0]);


      });

    }
    $scope.sousDomaineClick = sousDomaineClick;
    function MatiereClick(matiere) {
      console.log('matieres', matiere);
      Chapitre.listeChapitresByMatiere(matiere._id).then(function (listChapitre) {
        console.log(' liste chapitres', listChapitre);
        $scope.listChapitres = listChapitre;
        //ChapitreClick(listChapitre[0]);


      });

    }
    $scope.MatiereClick = MatiereClick;

    function ChapitreClick(chapitre) {
      $scope.listLecons = [];
      $scope.visible=true;
      Lecon.listLeconsByChapitre(chapitre._id).then(function (listLecons) {
        console.log("list lecons", listLecons);
        $scope.listLecons = listLecons;



      });

    }
    $scope.ChapitreClick = ChapitreClick;

    $scope.collapseAll = function (domaine) {
      for (var i in $scope.listDomaines) {
        if ($scope.listDomaines[i] != domaine) {
          $scope.listDomaines[i].expanded = false;
        }
      }
      domaine.expanded = !domaine.expanded;
    };
    function initParams(){
      //$scope.listDomaines = [];
      $scope.listSousDomaines = [];
      $scope.listLecons = [];
      $scope.listChapitres = [];
      $scope.listMatieres = [];


    }

  })

