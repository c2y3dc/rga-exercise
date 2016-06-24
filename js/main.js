angular.module('app', [])
  .directive('appHeader', function () {
    return {
      restrict: 'AE',
      templateUrl: 'templates/header.html'
    };
  })
  .directive('appExhibit', function () {
    return {
      restrict: 'AE',
      transclude: true,
      scope: {
        title: '@',
        imageName: '@'
      },
      templateUrl: 'templates/exhibit.html'
    };
  });
