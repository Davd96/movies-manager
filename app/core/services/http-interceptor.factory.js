'use strict';

angular.
    module('moviesManager').factory("RequestHeadersInterceptor", function () {

        return {
            request: (request) => {
                return request;
            },
            response: (response) => {
                return response;
            },
        };
    });




