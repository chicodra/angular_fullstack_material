'use strict';

angular.module('appChicoApp')

    .controller('ClasseCtrl', function($scope, $routeParams, $http, $location, socket, Cycle, Domaine, Niveau, sousDomaine, Matiere, Chapitre, Lecon) {
        $scope.classeLib = $routeParams.classeLib;
        $scope.cyclelib = $routeParams.cycle;
        $scope.visible = false;
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');


        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }


        function checkCycle(libelle) {
            $scope.bool = false;

            Cycle.listCycles().then(function(listCycles) {
                $scope.cycles = listCycles;
                console.log('cycles', $scope.cycles)

                console.log('libelle', libelle);
                for (var id in $scope.cycles) {

                    if ($scope.cycles[id].libelle == libelle) {
                        $scope.cycle = $scope.cycles[id];
                        console.log('cycle', $scope.cycles[id].libelle);
                        $scope.bool = true;

                    }
                }

            });


        }

        function checkNiveau(libelle) {
            $scope.boolniv = false;
            Niveau.listeNiveauByCycle($scope.cycle.id).then(function(listNiveau) {
                $scope.niveaux = listNiveau;
                console.log('niveau', $scope.niveaux)

                console.log('libelle', libelle);
                for (var id in $scope.niveaux) {

                    if ($scope.niveaux[id].libelle == libelle) {
                        console.log('niveau', $scope.niveaux[id].libelle);
                        $scope.boolniv = true;

                    }
                }
            });

        }

        function init() {
            //console.log(Niveau.niveau);

            if (Niveau.niveau == null) {
                checkCycle($scope.cyclelib);
                window.setTimeout(function() {

                    if ($scope.bool) {
                        console.log("true", $scope.bool);
                        checkNiveau($scope.classeLib)
                        window.setTimeout(function() {
                            console.log("classelib", $scope.boolniv);
                            if ($scope.boolniv) {
                                Niveau.getNiveauByLabel($scope.classeLib).then(function(niveau) {
                                    console.log("classe lib", niveau);
                                    Niveau.niveau = niveau;

                                });
                            }
                            else { $scope.$apply(function() { $location.path("/"); }); }


                        }, 100)
                    }
                    else {
                        console.log("false", $scope.bool);
                        $scope.$apply(function() { $location.path("/"); });
                        //$location.path('/');
                        //console.log('url',$location.absUrl());
                    }
                    //


                }, 200);



            }
            window.setTimeout(function() {
                Domaine.listeDomaineByNiveau(Niveau.niveau.id).then(function(listDomaines) {
                    $scope.listDomaines = listDomaines;
                    console.log("liste domaines", $scope.listDomaines);
                    //domaineClick($scope.listDomaines[0]);
                    //clickCycle($scope.listCycles[1]);

                })
            }, 100);

        }
        $scope.init = init();

        function domaineClick(domaine) {
            initParams();
            $scope.listSousDomaines = [];
            console.log("on domaine click", domaine);
            sousDomaine.listeSousDomaineByDomaine(domaine._id).then(function(listSousDomaines) {
                console.log("list sous domaine", listSousDomaines);
                $scope.listSousDomaines = listSousDomaines;
                // sousDomaineClick(listSousDomaines[0]);

            });


        }
        //domaineClick($scope.listDomaines[0]);
        $scope.domaineClick = domaineClick;

        function sousDomaineClick(sousdomaine) {
            $scope.listChapitres = [];
            Matiere.listeMatieresBySousDomaines(sousdomaine._id).then(function(listMatieres) {
                console.log("list matieres", listMatieres);
                $scope.listMatieres = listMatieres;
                //MatiereClick(listMatieres[0]);


            });

        }
        $scope.sousDomaineClick = sousDomaineClick;

        function MatiereClick(matiere) {

            console.log('matieres', matiere);
            Chapitre.listeChapitresByMatiere(matiere._id).then(function(listChapitre) {
                console.log(' liste chapitres', listChapitre);
                $scope.listChapitres = listChapitre;
                //ChapitreClick(listChapitre[0]);


            });

        }
        $scope.MatiereClick = MatiereClick;

        function ChapitreClick(chapitre) {
            $scope.listLecons = [];
            $scope.visible = true;
            Lecon.listLeconsByChapitre(chapitre._id).then(function(listLecons) {
                console.log("list lecons", listLecons);
                $scope.listLecons = listLecons;


            });

        }
        $scope.ChapitreClick = ChapitreClick;

        $scope.collapseAll = function(domaine) {
            for (var i in $scope.listDomaines) {
                if ($scope.listDomaines[i] != domaine) {
                    $scope.listDomaines[i].expanded = false;
                }

            }
            domaine.expanded = !domaine.expanded;
        };

        function initParams() {
            //$scope.listDomaines = [];
            $scope.listSousDomaines = [];
            $scope.listLecons = [];
            $scope.listChapitres = [];
            $scope.listMatieres = [];


        }

    })

