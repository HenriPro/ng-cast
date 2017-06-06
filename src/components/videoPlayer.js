function VideoPlayerController() {
    this.videoUrl = () => {
      return `https://www.youtube.com/embed/${this.currentVideo.id.videoId}`;
    };
  }

angular.module('video-player')

.component('videoPlayer', {

  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    currentVideo: '<'
  },
  controller: VideoPlayerController


})
