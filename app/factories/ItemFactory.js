'use strict';

angular.module('ToDoApp').factory('ItemFactory', (FBUrl, $http, $q) => {

    let getToDoItems = () => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/items.json?orderBy=uid&equalTo=${firebase.auth().currentUser.uid}`)
            .then(({data}) => resolve(data))
            .catch(err => err);
        });
    };  

    let formatFirebaseData = (data) => {
        // Add firebase key to object array
        let formattedData = Object.keys(data).map(key => {
            data[key].id = key;
            return data[key];
        });
        return formattedData;
    };

    let fetchToDoItems = () => {
        return $q((resolve, reject) => {
            getToDoItems().then(data => resolve(formatFirebaseData(data)));
        });
    };

    let addNewItem = (toDoItem) => {
        return $q((resolve, reject) => {
            $http
            .post(`${FBUrl}/items.json`, JSON.stringify(toDoItem))
            .then(postData => resolve(postData))
            .catch(err => reject(err));
        });
    };

    let editItem = (toDoItem, id) => {
        return $q((resolve, reject) => {
            $http
            .patch(`${FBUrl}/items/${id}.json`, JSON.stringify(toDoItem))
            .then(postData => resolve(postData))
            .catch(err => reject(err));
        });
    };

    let deleteItem = (id) => {
        return $q((resolve, reject) => {
            $http
            .delete(`${FBUrl}/items/${id}.json`)
            .then(postData => resolve(postData))
            .catch(err => reject(err));
        });
    };

    return {addNewItem, fetchToDoItems, deleteItem, editItem};
});