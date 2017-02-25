angular.module('video-player')

// .controller('appvideos', function($scope) {
//   $scope.videos = window.exampleVideoData;
// })
.controller('appView', function($scope) {
  
})


.directive('app', function() {
  

  return {
    //TODO
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      this.videos = window.exampleVideoData;
      console.log('app:', $scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});
