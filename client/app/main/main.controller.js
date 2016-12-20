'use strict';

angular.module('appChicoApp')
  .controller('MainCtrl', function ($timeout, $scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').then(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
    $scope.currentNavItem = 'page1';
    $http.get('/api/classes').then(function(listClasse) {
      $scope.listClasse = listClasse.data
      console.log("data", listClasse.data);
    });



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

$('#dropdown').click(function(){
  alert(ok);
});