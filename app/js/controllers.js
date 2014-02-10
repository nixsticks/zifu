'use strict';

/* Controllers */

var chineseControllers = angular.module('chineseControllers', []);

chineseControllers.controller('ChineseListCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.getSearch = function(query) {
    $location.path('/search/' + query);
  }
}]);

chineseControllers.controller('ChineseCharacterCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://ccdb.hemiola.com/characters/definition/' + $routeParams.meaning + '/?fields=string,kMandarin,kDefinition').success(function(data) {
    $scope.characters = data;
  });
}]);