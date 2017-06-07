angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(searchString, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchString,
        key: $window.YOUTUBE_API_KEY,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then( function({data}) { 
      callback(data.items); 
    }, function(err) { 
      console.error(err.message); 
    });
  }
});
