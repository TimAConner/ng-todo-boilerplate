'use strict';

angular.module('ToDoApp').controller('ItemListCtrl', function($scope, ItemFactory){

 
    $scope.items = ItemFactory.getToDoItems();

    // Attempt at destructuring the object
    $scope.itemInfo = $scope.items.map(item => {
        let {id, task} = item;
        return {id, task};
    });


}); 