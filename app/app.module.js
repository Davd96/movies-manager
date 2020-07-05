'use strict';

angular.module('moviesManager', [
    'ngRoute',
    'rx',
    'login',
    'header',
    'filmList',
    'filmDetails'

]).config(function ($httpProvider) {
    $httpProvider.interceptors.push('RequestHeadersInterceptor');
}).run(function ($rootScope, loginService) {
    $rootScope.$on('$routeChangeStart', function () {
        loginService.checkAuth();
    });
});


