function AppController1() {

  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];
  //console.log(this.videos);
  console.log('app currentVideo')
  console.log(this.currentVideo);


  this.selectVideo = function() {
    console.log('App is selecting a video');
    console.log(this.videos);
  };
  this.searchResults = function() {
    console.log('App is searching results');
  };

  // return this;
}

angular.module('video-player')
  .controller('AppController2', AppController1)
  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: AppController1

});
