'use strict';

angular.module('ToDoApp').controller('ItemListCtrl', function($scope, ItemFactory, $rootScope, FilterFactory, $route){

    $scope.searchTerm = FilterFactory;

    $scope.items = [];

    ItemFactory.fetchToDoItems().then(data => {
        $scope.items = data;
    });
    // Attempt at destructuring the object
    // $scope.itemInfo = $scope.items.map(item => {
    //     let {id, task} = item;
    //     return {id, task};
    // });

    $scope.deleteItem = (id) => {
        ItemFactory.deleteItem(id).then((data) => {
            $route.reload();
        })
        .catch(err => {
            console.log('err', err);
        });
    };

}); 