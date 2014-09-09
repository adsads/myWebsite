var app = angular.module('mainPage', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homePageCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutPageCtrl'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactPageCtrl'
        }).
        when('/courses', {
            templateUrl: 'partials/courses.html',
            controller: 'coursePageCtrl'
        }).
        when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'projectPageCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

app.controller('mainPageCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

    }]);

app.controller('homePageCtrl', ['$scope',
    function ($scope) {

        $scope.words = "I am a home page";

    }]);

app.controller('aboutPageCtrl', ['$scope',
    function ($scope) {


        $scope.words = "I am an about page";


    }]);

app.controller('contactPageCtrl', ['$scope',
    function ($scope) {


        $scope.words = "I am a contact page";


    }]);

app.controller('coursePageCtrl', ['$scope',
    function ($scope) {


        $scope.words = "I am a course page";


    }]);

app.controller('projectPageCtrl', ['$scope',
    function ($scope) {


        $scope.words = "I am a project page";


    }]);