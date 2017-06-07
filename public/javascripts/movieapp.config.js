(function() {
  'use strict';

  angular.module('movieapp').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    //here always include   $urlRouterProvider.otherwise('/');
    $urlRouterProvider.otherwise('/error');

    // this line is optional
    $locationProvider.html5Mode(true);

    $stateProvider
     .state({
      name: 'app',
      abstract: true,
      component: 'app',

    })
    .state('home', {
      parent: 'app',
      url: '/',
      // templateUrl: 'app/home_component.html',
      component: 'homeComponent',
    })

    .state('movies', {
      parent: 'app',
      url: '/movies',
      // templateUrl: 'app/movies_component.html',
      component: 'moviesComponent',

    })

    .state('movieDetails', {
      parent: 'app',
      url: '/movieDetails/:id',
   //   templateUrl: 'movies_component.html',
      component: 'movieDetails_component',

    })


    .state('error', {
      url: '/error',
      component: 'app/error.html',
    });
  }

}());
