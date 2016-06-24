angular.module('app', [])
  .directive('appHeader', function () {
    return {
      restrict: 'AE',
      templateUrl: 'templates/header.html'
    };
  })
  .directive('appExhibit', function ($sce) {
    return {
      restrict: 'AE',
      transclude: true,
      controller: 'ExhibitController',
      controllerAs: 'EC',
      scope: {
        title: '@',
        imageName: '@',
        videoTitle: '@',
        youtubeId: '@'
      },
      templateUrl: 'templates/exhibit.html',
      link: function ($scope, element, attrs) {

      }
    };
  })
  .controller('ExhibitController', function ($scope, $sce) {
    var EC = this;
    EC.isVideoShowing = false;
    EC.youtubeVideoURL = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.youtubeId);

    EC.showVideo = function () {
      EC.isVideoShowing = true;
    };

    EC.hideVideo = function () {
      EC.isVideoShowing = false;
    };

  });
