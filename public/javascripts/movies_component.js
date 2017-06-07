(function() {
   'use strict';

   angular.module('movieapp')
      .component('moviesComponent', {
         controller: controller,
         templateUrl: '/app/movies_component.html'
      });

   controller.$inject = ['$http'];
   function controller($http) {
      var vm = this;

      vm.$onInit = onInit;
      // vm.showTheForm = false;
      // vm.index = 0;
      // vm.addPost = addPost;
      // vm.incrementVotes = incrementVotes;
      // vm.decrementVotes = decrementVotes;
      // vm.currentTime = new Date();
      // vm.addComment = addComment;
      // vm.selectSort = "-votes";

      function onInit() {
          console.log("we are in the movies component.js");
       }

       function addComment(post) {
          post.comments.push(post.newComment);
          post.newComment=null;

       }
   }
}());
