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
    $rootScope.pointsBank = $scope.challenge.FantasyChallenge.AvailableFantasyPoints;
    $rootScope.positionNames = $scope.challenge.FantasyChallenge.PositionNames;
    // In order to have responsive style, if three options, 33% of width
    // if 4 options 25% and so on
    $rootScope.styleWidth = 100.0/$rootScope.positionNames.length;
  });  

  $scope.selectPlayer = function(player) {
    
    // Used to change class for selected table row
    // class is called "active" in app.css
    $scope.active = player;
  }

    $scope.draft = function(name) {
        alert(name + '!');
    }
}
