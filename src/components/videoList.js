angular.module('video-player')

.controller('videoList', function($scope) {
  $scope.onClick = function () {
    
  };
})

.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('videoList:', $scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
