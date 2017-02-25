angular.module('video-player')

.controller('videos', function($scope) {
  $scope.videos = window.exampleVideoData;
})

.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
