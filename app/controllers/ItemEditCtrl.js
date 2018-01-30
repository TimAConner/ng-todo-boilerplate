'use strict';

angular.module('ToDoApp').controller('ItemEditCtrl', function($scope, ItemFactory, $routeParams, $location){
   
    
    $scope.title = "Edit";
    
    ItemFactory.fetchToDoItems()
    .then(items => {
        $scope.toDoItem = items.find(item => item.id === $routeParams.id);
    });

    $scope.saveItem = () => {
        ItemFactory.editItem($scope.toDoItem, $routeParams.id)
        .then(() => {
            $location.url("/items/list");
        })
        .catch(err => {
            console.log(err);
        });
    };

});
