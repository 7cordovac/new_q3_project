(function() {
   'use strict';

   angular.module('movieapp')
      .component('moviesComponent', {
         controller: controller,
         templateUrl: '/app/moviesComponent.html'
      });

   controller.$inject = ['movieService' ]

   function controller(movieService) {
      var vm = this;



      vm.$onInit = onInit;

      function onInit() {
         console.log(movieService);
         movieService.getMovies()
                     .then(function (response){
                            console.log(response.data.results);
                            vm.movies=response.data.results;
                      });
      }
   }




}());
