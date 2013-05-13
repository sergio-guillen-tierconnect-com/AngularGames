'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

function BodyCtrl ($scope) {
  // Para header-bar
  $scope.accountBalance = 30;
  // Para points bank
  $scope.pointsBank = 20;
}

function DraftTeamCtrl ($scope, $http) {
  $http.get('data/players.json').success(function(data) {
    $scope.challenge = data;
  });
}
