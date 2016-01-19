var app = angular.module('cityApp', ['ngRoute']);


app.config(function($routeProvider){
    // Ruta principal
    $routeProvider.when('/',{  
        templateUrl:'templates/main.html',
        controller: 'mainController'
    })
    .when('/secundary',{  
        templateUrl:'templates/cities.html',
        controller: 'secundaryController'
    });
});


app.controller('mainController', function ($scope){
    $scope.name = 'Caleb';
});

app.controller('secundaryController', function ($scope){
    $scope.cities = [
        {'country': 'Costa Rica',       'city': 'Heredia'}, 
        {'country': 'France',           'city': 'Paris'}, 
        {'country': 'United Kingdom',   'city': 'London'}, 
        {'country': 'Japan',            'city': 'Osaka'}
    ];
});