(function() {
   'use strict';

   angular.module('movieapp')
      .component('app', {
         controller: controller,
         templateUrl: '/app/appComponent.html'
      });

   controller.$inject = ['$http'];
   function controller($http) {
      var vm = this;

}


}());
