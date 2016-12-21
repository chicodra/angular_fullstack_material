'use strict';

angular.module('appChicoApp')
  .controller('ClasseCtrl', function ($scope, $routeParams, $http, socket,Domaine,Niveau,sousDomaine,Matiere,Chapitre,Lecon) {
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

      Domaine.listeDomaineByNiveau(Niveau.niveau._id).then(function (listDomaines) {
        $scope.listDomaines=listDomaines;
        console.log("liste domaines",$scope.listDomaines);
        domaineClick($scope.listDomaines[0]);
        //clickCycle($scope.listCycles[1]);

      });

    }
    $scope.init=init();

    function domaineClick(domaine) {
      console.log("on domaine click",domaine);
      sousDomaine.listeSousDomaineByDomaine(domaine._id).then(function (listSousDomaines) {
        console.log("list sous domaine",listSousDomaines);
        $scope.listSousDomaines=listSousDomaines;
        sousDomaineClick(listSousDomaines[0]);

       });



    }

    //domaineClick($scope.listDomaines[0]);
    $scope.domaineClick=domaineClick;

    function sousDomaineClick(sousdomaine) {
      Matiere.listeMatieresBySousDomaines(sousdomaine._id).then(function (listMatieres) {
        console.log("list matieres",listMatieres);
        $scope.listMatieres=listMatieres;
        MatiereClick(listMatieres[0]);


      });

    }
    $scope.sousDomaineClick=sousDomaineClick;
    function MatiereClick(matiere) {
      console.log('matieres',matiere);
      Chapitre.listeChapitresByMatiere(matiere._id).then(function (listChapitre) {
        console.log(' liste chapitres',listChapitre);
        $scope.listChapitres=listChapitre;
        ChapitreClick(listChapitre[0]);


      });

    }
    $scope.MatiereClick=MatiereClick;

    function ChapitreClick(chapitre) {
      Lecon.listLeconsByChapitre(chapitre._id).then(function (listLecons) {
        console.log("list lecons",listLecons);
        $scope.listLecons=listLecons;



      });

    }
    $scope.ChapitreClick=ChapitreClick;
    //kain
    $scope.accordianData = [
      {
        "heading" : "HOLDEN",
        "content" : "GM Holden Ltd, commonly known as Holden, is an Australian automaker that operates in Australasia and is headquartered in Port Melbourne, Victoria. The company was founded in 1856 as a saddlery manufacturer in South Australia."
      },
      {
        "heading" : "FORD",
        "content" : "The Ford Motor Company (commonly referred to as simply Ford) is an American multinational automaker headquartered in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903."
      },
      {
        "heading" : "TOYOTA",
        "content" : "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."
      }
    ];

    // FIN accordion


  })

