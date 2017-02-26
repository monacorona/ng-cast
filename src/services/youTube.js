angular.module('video-player')
.service('youTube', function($http, $window) {
  // TODO
  this.search = function(query, callback) {
    console.log('inside search function');

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        key: $window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: 5,
        videoEmbeddable: true
      }
    }).then(function (response) {
      console.log('this is my search response:', response);
      callback(response.data.items);
    },
      function errorCallback(response) {
        console.log('error occured');
      });
  };
});

