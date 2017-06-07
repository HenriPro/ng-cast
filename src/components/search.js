function SearchController(youTube) {
  
  this.search = () => {
    youTube.search(this.searchText, this.searchResults);
  }

  this.clear = () => {
    this.searchText = '';
  }

  this.searchAndClear = () => {
    this.search();
    this.clear(); 
  }
}

angular.module('video-player')
.controller('SearchController', SearchController)
.component('search', {

  templateUrl: 'src/templates/search.html',
  controller: SearchController,
  bindings: {
    searchResults: '<'
  }

});
