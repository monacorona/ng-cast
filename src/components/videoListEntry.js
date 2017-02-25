angular.module('video-player')
.controller('videoListEntry', function($scope) {
  
})


.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('videoListEntry:', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html' 
  };
});
