'use strict';

angular.
    module('moviesManager').service('loginService', function ($location, userService) {

        return {
            login: (body) => {
                return new Promise(function (resolve) {

                    //response time simulation
                    setTimeout(function () {
                        resolve({
                            data: {
                                "id": 1001,
                                "email": body.email,
                                "key": "f12ba140"
                            }

                        });
                    }, 100);
                });
            },
            logout: () => {
                userService.deleteUser()
                $location.path('login')
            },
            checkAuth: () => {
                return userService.getUser() ? true : $location.path('login')
            }

        }


    });



