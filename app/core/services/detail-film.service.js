'use strict';

angular.
    module('moviesManager').service('detailFilmService', function () {

        return {
            setFilm: (film) => {
                localStorage.setItem('detailFilm', JSON.stringify(film));
            },
            getFilm: () => {
                return JSON.parse(localStorage.getItem('detailFilm'));
            }
        }

    });