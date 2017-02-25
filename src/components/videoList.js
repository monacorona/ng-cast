angular.module('video-player')

.controller('videoList', function($scope) {
})

.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('videoList:', $scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
