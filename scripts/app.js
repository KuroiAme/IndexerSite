'use strict';

var app = angular.module('KuroiAme.Indexersite', ['ngAnimate', 'ngRoute','angulartics', 'angulartics.google.analytics','ngResource', 'ngCookies'])

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

app.service('translationService', function($resource) {
    this.getTranslation = function($scope, language) {
        if(language == undefined){
            language = "en";
        }
        var languageFilePath = 'translations/translation_' + language + '.json';
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });
    };
});

