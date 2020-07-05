'use strict';

angular.
  module('moviesManager').directive('backButton', function () {
    return {
      restrict: 'A',

      link: (scope, element) => {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }

      }
    }
  });