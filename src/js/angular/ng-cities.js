var app = angular.module('cityApp', ['ngRoute']);


app.config(function($routeProvider){
    // Ruta principal
    $routeProvider.when('/',{  
        templateUrl:'templates/cities.html',
        controller: 'mainController'
    })
    .when('/secundary',{  
        templateUrl:'templates/main.html',
        controller: 'secundary'
    });
});


app.controller('mainController', function ($scope){
    $scope.cities = [
        {'country': 'Costa Rica',       'city': 'Heredia'}, 
        {'country': 'France',           'city': 'Paris'}, 
        {'country': 'United Kingdom',   'city': 'London'}, 
        {'country': 'Japan',            'city': 'Osaka'}
    ];
});

app.controller('secundary', function ($scope){
    $scope.name = 'Caleb';
});