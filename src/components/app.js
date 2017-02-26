angular.module('video-player')

// .controller('appvideos', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })
.controller('appView', function(youTube) {

  this.videos = window.exampleVideoData;
  this.onClick = function () {
    // console.log('inside onClick function');
  };
  // console.log('app:', this);
  
  
  this.selectVideo = function (video) {
    this.currentVideo = video;
  };

  this.searchResults = function (items) {
    this.videos = items;
    this.currentVideo = this.videos[0];
  };
  
  youTube.search('cats', this.searchResults);

})


.directive('app', function() {


  return {
    //TODO
    scope: {},
    controller: 'appView',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});
