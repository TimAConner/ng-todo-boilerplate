"use strict";

angular.module("ToDoApp", ["ngRoute"])
.constant('FBUrl', 'https://practice-project-d42d4.firebaseio.com/ngTodo/')
.config(($routeProvider) => {
    /*
     Route provider will break after it finds a when that matches.  
     If /items/:id is at the top, it will catch all and not allow /list or /new.
    */
    $routeProvider
    
    .when('/items/list', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl',
    })
    .when('/items/new', {
        templateUrl: 'partials/item-new.html',
        controller: 'ItemNewCtrl'
    })
    .when('/items/deets/:id', {
        templateUrl: 'partials/item-details.html',
        controller: 'ItemDetailCtrl'
    })
    .otherwise('/items/list');
});

