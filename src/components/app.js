function AppController(youTube) {

  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (videos) => {
    console.log('App found these search results: ', videos);
    this.videos = videos;
  };

  youTube.search('FRENCH BULLDOG PUPPIES', this.searchResults);
}

angular.module('video-player')
  .controller('AppController', AppController)
  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: AppController

});
