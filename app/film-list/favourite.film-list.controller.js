
'use strict';

angular.
  module('filmList').controller('favouriteFilmListCtrl', function ($scope, detailFilmService, favouriteService) {

    $scope.detailFilmService = detailFilmService;
    $scope.favouriteService = favouriteService;

    $scope.films = JSON.parse(localStorage.getItem('filmList')) || [];

    $scope.title = "My favourites.";

    $scope.emptyInfo = "You have no favourite movie yet!";

    $scope.isFavouriteCtrl = true;

    
    //"override" function to update the list
    $scope.favouriteService.delFavourite = function (deleteFilm) {
      let filmList = JSON.parse(localStorage.getItem('filmList')) || [];
      filmList = filmList.filter((film) => film.imdbID !== deleteFilm.imdbID)
      localStorage.setItem('filmList', JSON.stringify(filmList));
      
      $scope.films = filmList;
  }
  

  });