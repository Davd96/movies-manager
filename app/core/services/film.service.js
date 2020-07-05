'use strict';

angular.
    module('moviesManager').service('filmService', function ($http, userService, rx) {

        return {
            findByName: (title) => {
                const key = userService.getUser().key;
                return $http.get(`http://www.omdbapi.com/?apikey=${key}&s=${title}`);
            },
            suggestByName: (term) => {
                const key = userService.getUser().key;
                const apiUrl = `http://www.omdbapi.com/?apikey=${key}&s=${term}*`;

                return rx.Observable.create(function (observer) {
                    $http.get(apiUrl)
                        .then(json => {
                            observer.onNext(json);
                            observer.onCompleted();
                        }).catch(observer.onError);
                }).map(json => {
                    let res = undefined

                    if (json.data.Search)
                        res = json.data.Search.slice(0, 5);

                    return res
                });
            }
        }

    });
