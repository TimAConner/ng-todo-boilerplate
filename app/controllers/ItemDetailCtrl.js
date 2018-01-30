'use strict';

angular.module('ToDoApp').controller('ItemDetailCtrl', function($scope, ItemFactory, $routeParams){

    // let todoItems = [];

    // use + to make routeParams into number
    ItemFactory.fetchToDoItems()
    .then(items => {
        $scope.selectedItem = items.find(item => item.id === $routeParams.id);
        console.log('$scope.selectedItem', $scope.selectedItem);
    });
});