'use strict';

angular.module('ToDoApp').factory('AuthFactory', (FBCreds, $q) => {
   let currentUser = null;

   const createUser = ({email, password}) => {
       return firebase.auth()
       .createUserWithEmailAndPassword(email, password);
    };
   const loginUser = ({email, password}) => {
       return firebase.auth()
       .signInWithEmailAndPassword(email, password);
    };

    const isAuthenticated = () => {
        return $q((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    currentUser = user.uid;
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const logoutUser = () => firebase.auth().signOut();

    const getCurrentUser = () => {

    };

   return {createUser, loginUser, isAuthenticated, getCurrentUser, logoutUser};
});