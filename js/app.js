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
        otherwise({
            redirectTo: '/'
        });
}]);

app.controller('mainPageCtrl', ['$scope',
    function ($scope) {
        var slides = $scope.slides = [];

        slides.push({
            image: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/9287_806314672733122_6720519754104971586_n.jpg?oh=02e7e2a8497987a6beee98a1c59d6520&oe=5484590B&__gda__=1418571474_c109f9ce2ff0ee1beb1a6ffb9c27ac79',
            text: 'My First Picture'
        });

        slides.push({
            image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10612761_806314569399799_8668823446257359798_n.jpg?oh=689c4c002e4017dcd6784d0ee5393663&oe=5498F796&__gda__=1418239818_ed33789efe54ce22968d4e7e1d4e2149',
            text: 'My second Picture'
        });

    }]);

app.controller('homePageCtrl', ['$scope',
    function ($scope) {

        $scope.words = "I am a home page";

    }]);

app.controller('aboutPageCtrl', ['$scope',
    function ($scope) {


        $scope.words = "I am an about page";


    }]);