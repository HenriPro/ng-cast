function SearchController() {
  this.search = () => {
    console.log(this.searchText);
    youTube.search(searchText, (data) => {console.log('got utube data: ', data);});
    this.searchText = '';
  }
}

angular.module('video-player')
.controller('SearchController', SearchController)
.component('search', {

  templateUrl: 'src/templates/search.html',
  controller: SearchController

});
