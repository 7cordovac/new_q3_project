(function() {
   'use strict';

    angular
        .module("movieapp")
        .service('movieService', movieService);

    movieService.$inject = ['$http'];

    // Injecting http into this service
    function movieService($http) {
      this.getMovies = function() {
         return $http.get("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=b7cf8bed2eaf0d01e4db550d15a0e134");
      }
    }

    function movieSearch($http)  {
      this.searchMovies = function () {
         return$http.get("");
      }
   }
})();
