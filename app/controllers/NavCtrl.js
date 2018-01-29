'use strict';

angular.module('ToDoApp').controller('NavCtrl', function($scope, $rootScope, FilterFactory, $location){
    
    $scope.searchTerm = FilterFactory;

    $scope.isActive = viewLocation => viewLocation === $location.path();
    

    $scope.navItems = [
        // TODO: Hide/Show login/logout
        // {
        //     name: 'Logout',
        //     url: '#!/logout'
        // },
        // {
        //     name: 'Login',
        //     url: '#!/logins'
        // },
        {
            name: 'All Items',
            url: '#!/items/list'
        },
        {
            name: 'Add New Item',
            url: '#!/items/new'
        }
    ];

});