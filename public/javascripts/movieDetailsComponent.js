(function() {
   'use strict';

   angular.module('movieapp')
      .component('movieDetailsComponent', {
         controller: controller,
         templateUrl: '/app/movieDetailsComponent.html'
      });

   controller.$inject = ['$http'];

   function controller($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
          console.log("we are in the movies details component.js");
       }
    }
}());
