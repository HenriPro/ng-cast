function VideoListController() {
  var ctrl = this;
  console.log('videoList');
  console.log(this);
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
