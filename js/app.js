var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'mainPageCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'mainPageCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'mainPageCtrl'
      }).
      when('/courses', {
        templateUrl: 'partials/courses.html',
        controller: 'mainPageCtrl'
      }).
      when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'mainPageCtrl'
      }).
      otherwise({
        redirectTo: '/'
      })
    ;
}])

.controller('mainPageCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };
}])

;