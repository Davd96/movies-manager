'use strict';

angular.
    module('moviesManager').service('userService', function () {

        return {
            setUser: (user) => {
                sessionStorage.setItem('user', JSON.stringify(user));
            },
            getUser: () => {
                return JSON.parse(sessionStorage.getItem('user'));
            },
            deleteUser: () => {
                sessionStorage.removeItem('user');
            }
        }
    });
