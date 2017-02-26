angular.module('video-player')

// .controller('appvideos', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })
.controller('appView', function() {
  this.videos = window.exampleVideoData;
  this.onClick = function () {
    console.log('inside onClick function');
  };
  console.log('app:', this);
  
  this.currentVideo = this.videos[0];
  
  this.selectVideo = function () {
  };

  this.searchResults = function () {

  };
 
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
