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
    .state('app.home', {
      url: '/',
      component: 'home_component',
    })
    .state('app.movies', {
      url: '/movies',
      component: 'movies_component',
    })
    .state('error', {
      url: '/error',
      componentUrl: 'app/error.html',
    });
  }

}());
