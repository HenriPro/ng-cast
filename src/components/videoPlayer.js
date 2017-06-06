function VideoPlayerController()  {
    var ctrl = this;

    console.log('videoPlayer');
    console.log(this);
  }

angular.module('video-player')

.component('videoPlayer', {
  // TODO
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    currentVideo: '<'
  },
  controller: VideoPlayerController


})
