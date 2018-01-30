'use strict';

angular.module('ToDoApp').controller('LoginCtrl',  function($scope, AuthFactory, $window){
    // TODO: Grab the user info and send it to AuthFacotyr
    // for rgister / login / logout 
    
    $scope.login = () => {
        AuthFactory.loginUser($scope.account)
        .then(user => {
            console.log('user', user);
            $window.location.href = "#!/items/lists/";
        })
        .catch(({code, message}) => {
            console.log('error:', code, message);
        });
    };

    $scope.register = () => {
        AuthFactory.createUser($scope.account)
        .then( user => {
            console.log('user', user);
            $scope.login();
            /*
            Because we are using firebase, 
            the digest cycle is not being started and triggering an update on the (.then).
            Therefore, we need to use $window.
            */
            $window.location.href = "#!/items/lists/";
        })
        .catch(({code, message}) => {
            console.log('error:', code, message);
        });
    };

    $scope.logOut = () => {
        AuthFactory.logoutUser()
        .then(data => {
            console.log('data', data);
        });
    };

});