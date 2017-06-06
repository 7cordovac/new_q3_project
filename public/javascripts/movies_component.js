(function() {
   'use strict';

   angular.module('movieapp')
      .component('movies_component', {
         controller: controller,
         templateUrl: '/app/movies_component.html'
      });

   controller.$inject = ['$http'];

   function controller($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
          console.log("we are in the movies component");

   }
}
}());
