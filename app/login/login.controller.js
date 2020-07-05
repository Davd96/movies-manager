
'use strict';

angular.
  module('login').controller('loginCtrl', function ($rootScope, $scope, $location, loginService, userService) {
    $scope.hideHeader = true;
    $scope.body = {};

    $scope.submit = function () {
      if ($scope.body.email && $scope.body.password) {

        loginService.login($scope.body).then((response) => {
          userService.setUser(response.data);
          $location.path('favourite');
          $rootScope.$broadcast('userLoggedIn');
          $scope.$apply();
        });

      }
    }

  });