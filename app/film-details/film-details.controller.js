
'use strict';

angular.
  module('filmDetails').controller('filmDetailsCtrl', function ($scope, detailFilmService, favouriteService) {

    const film = detailFilmService.getFilm();

    $scope.favouriteService = favouriteService;

    $scope.title = film.Title;

    $scope.film = film;

  });