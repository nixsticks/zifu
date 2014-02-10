'use strict';

/* Controllers */

var chineseControllers = angular.module('chineseControllers', []);

chineseControllers.controller('ChineseListCtrl', ['$scope', '$http', function($scope, $http) {
  // $http.get('').success(function(data) {
  //   $scope.characters = data;
  // });
}]);

chineseControllers.controller('ChineseCharacterCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://ccdb.hemiola.com/characters/definition/' + $routeParams.meaning + '/?fields=string,kMandarin,kDefinition').success(function(data) {
    $scope.characters = data;
  })
}])