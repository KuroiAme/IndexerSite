'use strict';

angular.module('KuroiAme.Indexersite', ['ngAnimate', 'ngRoute','angulartics', 'angulartics.google.analytics'])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider,$analyticsProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/features', {
        templateUrl: 'views/features.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });

       $analyticsProvider.virtualPageviews(true);


  });

