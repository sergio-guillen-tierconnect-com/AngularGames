'use strict';

/* Controllers */

angular.module('myApp.controllers', []);

function BodyCtrl ($scope) {
  // Para header-bar
  $scope.accountBalance = 30;
}

/* Uses $rootScope in order to have global variables
 * in this case pointsBank is a global variable, it is defined
 * in run method (app.js)
 */
function DraftTeamCtrl ($scope, $http, $rootScope) {
  $http.get('data/players.json').success(function(data) {
    $scope.challenge = data;
    if ($scope.challenge.FantasyChallenge.PositionOneAvailablePlayerList.length > 0) {
      $rootScope.pointsBank = $scope.challenge.FantasyChallenge.PositionOneAvailablePlayerList[0].FantasyCost;
    }
  });
  
  $scope.selectPlayer = function(player) {
    $rootScope.pointsBank = player.FantasyCost;
    
    // Used to change class for selected table row
    // class is called "active" in app.css
    $scope.active = player;
  }
}
