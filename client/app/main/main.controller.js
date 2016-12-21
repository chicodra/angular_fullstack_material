'use strict';

angular.module('appChicoApp')
  .controller('MainCtrl', function ($timeout, $scope, $http, socket,Cycle,Niveau) {
    $scope.awesomeThings = [];
    $scope.listCycles=[];
    //console.log("liste cycle",$scope.listCycles);
    $scope.listNiveau=[];
    //console.log("liste niveau",$scope.listNiveau);




    $scope.currentNavItem = 'page1';
    // $http.get('/api/niveaus').then(function(listClasse) {
    //   $scope.listClasse = listClasse.data
    //   console.log("data", listClasse.data);
    // });

    function init() {
      Cycle.listCycles().then(function (listCycles) {
        $scope.listCycles=listCycles;
        console.log("liste cycle",$scope.listCycles);
        clickCycle($scope.listCycles[1]);

      });

    }
    $scope.Partager=function (classe) {
     // console.log("partage",classe);
      Niveau.niveau=classe;
    }
    $scope.init=init;
    //init();
    function clickCycle(cycle) {
      if (cycle != undefined){
       // console.log("cycle",cycle)

        Niveau.listeNiveauByCycle(cycle._id).then(function (listNiveau) {
          //console.log(listNiveau)
          if(listNiveau==null ){
            $scope.listNiveau=[];
            //console.log("list Niveau",$scope.listNiveau);
          }
          else{
            $scope.listNiveau=listNiveau;
            //console.log("list Niveau",$scope.listNiveau);

          }


        });
      }



    }
    $scope.clickCycle=clickCycle;
    function disable(cycle) {
      if($scope.listCycles.indexOf(cycle)!=1){
        return true;
      }
      return false;

    }
    $scope.disable=disable;





    //---------------
    $scope.user = null;
    $scope.users = null;

    $scope.loadUsers = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {

      $scope.users =  $scope.users  || [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' }
      ];
      }, 650);
    }

      //-------------------------------------------


      $scope.getColor = function($index) {
      var _d = ($index + 1) % 11;
      var bg = '';

      switch(_d) {
        case 1:       bg = 'red';         break;
        case 2:       bg = 'green';       break;
        case 3:       bg = 'darkBlue';    break;
        case 4:       bg = 'blue';        break;
        case 5:       bg = 'yellow';      break;
        case 6:       bg = 'pink';        break;
        case 7:       bg = 'darkBlue';    break;
        case 8:       bg = 'purple';      break;
        case 9:       bg = 'deepBlue';    break;
        case 10:      bg = 'lightPurple'; break;
        default:      bg = 'yellow';      break;
      }

      return bg;
    };

    $scope.getSpan = function($index) {
      var _d = ($index + 1) % 11;

      if (_d === 1 || _d === 5) {
        return 2;
      }
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  })
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

function display() {
    //var now = angular.element(dropdown);;
    var ok = document.querySelectorAll('#dropdown li:not(.active)');
    console.log(ok)
}
