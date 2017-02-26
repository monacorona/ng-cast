angular.module('video-player')

.controller('search', function($scope) {
  this.result = function () {

  };
})

.directive('search', function() {
  return {
    // TODO
    scope: {
      result: '<'
    },
    controller: 'search',
    controllerAs: 'ctlr',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
