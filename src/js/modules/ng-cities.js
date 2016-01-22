var app = angular.module('cityApp', ['ngRoute']);


app.config(function($routeProvider){
    // Ruta principal
    $routeProvider.when('/',{  
        templateUrl:'templates/main.html',
        controller: 'mainController'
    })
    .when('/list',{  
        templateUrl:'templates/cities.html',
        controller: 'secundaryController'
    })
    .when('/add',{  
        templateUrl:'templates/add.html',
        controller: 'addController'
    });
});


app.factory('cityFactory', function(){ 
    var cities = [
        {'country': 'Costa Rica',       'city': 'Heredia'}, 
        {'country': 'France',           'city': 'Paris'}, 
        {'country': 'United Kingdom',   'city': 'London'}, 
        {'country': 'Japan',            'city': 'Osaka'}
    ];
  
    return {
        getAll : function () {
            return cities;
        },
        add : function (city) {
            cities.push(city);
        }
   };
});


app.controller('mainController', function ($scope){
    $scope.name = 'Caleb';
});


app.controller('secundaryController', function ($scope, cityFactory){
    $scope.cities = cityFactory.getAll();
});


app.controller('addController', function ($scope, cityFactory){
    $scope.addCity = function(){
        var addThis = {
            city: $scope.newCity,
            country: $scope.newCountry
        };

        cityFactory.add(addThis);

        // Limpiar los inputs          
        $scope.newCity= '';
        $scope.newCountry = '';
    }
});