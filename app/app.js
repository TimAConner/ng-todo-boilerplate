"use strict";

// Method define below is used in resolve of routeProvider's whens
let isAuth = AuthFactory => {
    return new Promise ((resolve, reject) => {
        AuthFactory.isAuthenticated().then( user => {
            firebase.auth().onAuthStateChanged( userBool => {
                if(userBool) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    });
};

angular.module("ToDoApp", ["ngRoute"])
.constant('FBUrl', 'https://practice-project-d42d4.firebaseio.com/ngTodo/')
.config(($routeProvider) => {
    /*
     Route provider will break after it finds a when that matches.  
     If /items/:id is at the top, it will catch all and not allow /list or /new.
    */
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/user-form.html',
        controller: 'LoginCtrl'
    })
    .when('/items/list', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl',
        resolve: {isAuth}
    })
    .when('/items/new', {
        templateUrl: 'partials/item-new.html',
        controller: 'ItemNewCtrl',
        resolve: {isAuth}
    })
    .when('/items/deets/:id', {
        templateUrl: 'partials/item-details.html',
        controller: 'ItemDetailCtrl',
        resolve: {isAuth}
    })
    .when('/items/deets/:id/edit', {
        templateUrl: 'partials/item-new.html',
        controller: 'ItemEditCtrl',
        resolve: {isAuth}
    })
    .otherwise('/items/list');
})
.run(FBCreds => {
    let {apiKey, authDomain} = FBCreds;
    let authConfig = {
        apiKey,
        authDomain
    };
    firebase.initializeApp(authConfig);
});

