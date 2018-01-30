'use strict';

angular.module('ToDoApp').factory('ItemFactory', (FBUrl, $http, $q) => {

    // let items = [
    //     {
    //         id: 0,
    //         task: "mow the lawn",
    //         isCompleted: false,
    //         dueDate: "12/5/17",
    //         assignedTo: "Greg",
    //         location: "Joe's house",
    //         urgency: "low",
    //         dependencies: "sunshine, clippers, hat, water, headphones"
    //     },
    //     {
    //         id: 1,
    //         task: "grade quizzes, I mean Mastery Watzits",
    //         isCompleted: false,
    //         dueDate: "12/5/17",
    //         assignedTo: "Joe",
    //         location: "NSS",
    //         urgency: "high",
    //         dependencies: "wifi, tissues, vodka"
    //     },
    //     {
    //         id: 2,
    //         task: "take a nap",
    //         isCompleted: false,
    //         dueDate: "5/21/18",
    //         assignedTo: "Joe",
    //         location: "Porch of lakefront cabin",
    //         urgency: "medium",
    //         dependencies: "hammock, silence"
    //     }
    // ];

    let getToDoItems = () => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/items.json`)
            .then(({data}) => resolve(data))
            .catch(err => err);
        });
    };  


    let formatFirebaseData = (data) => {
        console.log('data', data);
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

    let deleteItem = (id) => {
        return $q((resolve, reject) => {
            $http
            .delete(`${FBUrl}/items/${id}.json`)
            .then(postData => resolve(postData))
            .catch(err => reject(err));
        });
    };

    return {addNewItem, fetchToDoItems, deleteItem};
});