function AppController() {
  var ctrl = this;

  ctrl.videos = window.exampleVideoData;
  ctrl.currentVideo = window.exampleVideoData[0];
  //console.log(this.videos);
  console.log(this.currentVideo);


  ctrl.selectVideo = function() {
    console.log('App is selecting a video');
    console.log(this.videos);
  };
  ctrl.searchResults = function() {
    console.log('App is searching results');
  };

  // return this;
}

angular.module('video-player')
  .controller('AppController', AppController)
  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: AppController

});
