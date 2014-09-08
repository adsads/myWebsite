var app = angular.module('mainPage', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
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


app.controller('homePageCtrl', ['$scope', 
    function($scope) {
        
        $scope.words = "I am a home page";
        
        
        
    }]);

app.controller('aboutPageCtrl', ['$scope', 
    function($scope) {
        
        
        $scope.words = "I am an about page";
        
        
    }]);

