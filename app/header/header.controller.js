
'use strict';

angular.
  module('header').controller('headerCtrl', function ($rootScope, $route, $scope, $location, loginService, userService, detailFilmService) {

    $scope.loginService = loginService;
    $scope.detailFilmService = detailFilmService;

    $scope.reload = function () {
      $scope.searchInput = "";
      $route.reload();
    }

    $scope.onSubmit = function () {
      $location.path(`search/${$scope.searchInput}`);
      $scope.searchInput = "";
    }

    $scope.isLogin = function () {
      return $location.absUrl().split('/').pop() === 'login';
    }

    if (!$scope.isLogin()) {
      $scope.name = userService.getUser().email;
    }

    $rootScope.$on('userLoggedIn', function () {
      $scope.name = userService.getUser().email;
    });


  });