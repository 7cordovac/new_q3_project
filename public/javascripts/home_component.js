(function() {
   'use strict';

   angular.module('movieapp')
      .component('homeComponent', {
         controller: controller,
         templateUrl: '/app/home_component.html'
      });

   controller.$inject = ['$http'];

   function controller($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
          console.log("we are in the home.component.js");
       }
    }
}());
