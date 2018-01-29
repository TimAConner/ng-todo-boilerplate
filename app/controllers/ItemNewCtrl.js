'use strict';

angular.module('ToDoApp').controller('ItemNewCtrl', function($scope, ItemFactory, $location){

    $scope.newTask = {
        task: '',
        isCompleted: false,
        dueDate: '',
        assignedTo: '',
        location: '',
        urgency: '',
        dependencies: ''
    };

    $scope.addNewItem = () => {
        ItemFactory.addNewItem($scope.newTask)
        .then(() => {
            $location.url("/items/list");
        })
        .catch(err => {
            console.log(err);
        });
    };

});