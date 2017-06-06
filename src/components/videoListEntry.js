angular.module('video-player')
.component('videoListEntry', {
  // TODO
  templateUrl: 'src/templates/videoListEntry.html',
  controller: function() {
    console.log('Jack Skellington: WHAT. IS. THIS!??!?!', this);
  },
  bindings: {
    video: '<'
  }


}).controller();
