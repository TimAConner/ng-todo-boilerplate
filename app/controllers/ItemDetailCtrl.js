'use strict';

angular.module('ToDoApp').controller('ItemDetailCtrl', function($scope, ItemFactory, $routeParams){
    ItemFactory.fetchToDoItems()
    .then(items => {
        $scope.selectedItem = items.find(item => item.id === $routeParams.id);
    });
});