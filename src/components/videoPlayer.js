angular.module('video-player')

.controller('VideoPlayerCtrl', function() {
  // console.log('videoPlayer', this);

  this.title = this.video.snippet.title;
  this.description = this.video.snippet.description;
  this.videoUrl = 'https://www.youtube.com' + this.video.id.videoId;

})

.directive('videoPlayer', function() {
  return {
    // TODO
    scope: {
      video: '<'
    },
    controller: 'VideoPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
