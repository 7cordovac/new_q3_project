(function() {
   'use strict';

   angular.module('movieapp')
      .component('app', {
         controller: controller,
         templateUrl: '/app/app-component.html'
      });

   controller.$inject = ['$http'];

   function controller($http) {
      var vm = this;

      vm.$onInit = onInit;

      function onInit() {
          console.log("we are in the main app component");

   }
}
}());
