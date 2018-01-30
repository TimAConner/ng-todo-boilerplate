'use strict';

angular.module('ToDoApp').controller('ItemNewCtrl', function($scope, ItemFactory, $location){

    $scope.title = "New";

    $scope.toDoItem = {
        task: '',
        isCompleted: false,
        dueDate: '',
        assignedTo: '',
        location: '',
        urgency: '',
        dependencies: ''
    };

    $scope.saveItem = () => {
        // Assign uid to item
        $scope.toDoItem.uid = firebase.auth().currentUser.uid;
        ItemFactory.addNewItem($scope.toDoItem)
        .then(() => {
            $location.url("/items/list");
        })
        .catch(err => {
            console.log(err);
        });
    };

});