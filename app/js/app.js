'use strict';


// Declare app level module which depends on filters, and services
var chineseApp = angular.module('chineseApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'angular-carousel', 'chineseControllers']);

chineseApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/search/:meaning', {
      templateUrl: 'partials/characters.html',
      controller: 'ChineseCharacterCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
