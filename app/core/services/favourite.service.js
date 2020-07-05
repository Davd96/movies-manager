'use strict';

angular.
    module('moviesManager').service('favouriteService', function () {

        return {
            addFavourite: (favouriteFilm) => {
                let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

                if (filmList.findIndex(film => film.imdbID === favouriteFilm.imdbID) < 0) {
                    filmList.push(favouriteFilm);
                    localStorage.setItem('filmList', JSON.stringify(filmList));
                }
            },
            delFavourite: (deleteFilm) => {
                let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

                filmList = filmList.filter((film) => film.imdbID !== deleteFilm.imdbID);
                localStorage.setItem('filmList', JSON.stringify(filmList));
            },

            isFavourite: (film) => {
                let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

                return filmList.findIndex(filmItem => filmItem.imdbID === film.imdbID) >= 0;
            }
        }


    });