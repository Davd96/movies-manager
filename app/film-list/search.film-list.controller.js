
'use strict';

angular.
  module('filmList').controller('searchFilmListCtrl', function ($scope, $routeParams, filmService, detailFilmService, favouriteService) {

    $scope.detailFilmService = detailFilmService;

    $scope.favouriteService = favouriteService;

    $scope.title = `Search results for: ${$routeParams.searchInput}`;
    $scope.backTo = false;


    filmService.findByName($routeParams.searchInput).then(function (response) {
      if (response.data.Search) {
        $scope.films = response.data.Search;
      } else {
        $scope.emptyInfo = response.data.Error;
      }
    });
  });