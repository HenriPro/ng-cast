function AppController(youTube) {

  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (videos) => {
    this.videos = videos;
  };
}

angular.module('video-player')
  .controller('AppController', AppController)
  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: AppController

});
