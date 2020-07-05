angular.
  module('moviesManager').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'login/login.template.html',
          controller: 'loginCtrl'
        })
        .when('/search/:searchInput', {
          templateUrl: 'film-list/film-list.template.html',
          controller: 'searchFilmListCtrl'
        })

        .when('/details', {
          templateUrl: 'film-details/film-details.template.html',
          controller: 'filmDetailsCtrl'
        })

        .otherwise({
          templateUrl: 'film-list/film-list.template.html',
          controller: 'favouriteFilmListCtrl'
        });
    }
  ]);