(function() {
   'use strict';

   angular.module('movieapp')
      .component('homeComponent', {
         controller: controller,
         templateUrl: '/app/homeComponent.html'
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
