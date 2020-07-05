angular.module('moviesManager')
    .directive('autocomplete', function (filmService) {
        return {
            link: function (scope) {
                scope.$createObservableFunction('update')
                    .debounce(400)
                    .map((search) => search.trim())
                    .filter((search) => search.length > 0)
                    .distinctUntilChanged()
                    .map((search) => filmService.suggestByName(search))
                    .switch()
                    .digest(scope, 'suggestions')
                    .subscribe();
            }
        }
    });