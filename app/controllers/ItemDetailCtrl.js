'use strict';

angular.module('ToDoApp').controller('ItemDetailCtrl', function($scope, ItemFactory, $routeParams){

    let todoItems = ItemFactory.getToDoItems();

    // use + to make routeParams into number
    $scope.selectedItem = todoItems.find(item => item.id === +$routeParams.id);
    console.log('$scope.selectedItem', $scope.selectedItem);
});