'use strict';

angular.module('KuroiAme.Indexersite')

  .controller('MainCtrl', function($scope, $location, version,translationService,$cookies) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

    $scope.setLanguage = function(languageCode){
        $cookies.language = languageCode;
        translationService.getTranslation($scope,languageCode);
        console.log(languageCode);
    }

    translationService.getTranslation($scope,$cookies.lang);

  });

