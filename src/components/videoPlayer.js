angular.module('video-player')

.controller('VideoPlayerCtrl', function() {
  console.log('videoPlayer', this);

})

.directive('videoPlayer', function() {
  return {
    // TODO
    scope: {
      video: '<',
      selectVideo: '<'
    },
    controller: 'VideoPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
