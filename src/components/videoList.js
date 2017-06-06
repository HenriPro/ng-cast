function VideoListController() {
  var ctrl = this;
  console.log(this.videos);
  //ctrl.videos = window.exampleVideoData;
}

angular.module('video-player')
.component('videoList', {

  templateUrl: 'src/templates/videoList.html',
  
  bindings: {
    videos: '<'
  },
  controller: VideoListController
 

});
