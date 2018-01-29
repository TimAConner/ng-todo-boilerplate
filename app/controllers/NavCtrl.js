'use strict';

angular.module('ToDoApp').controller('NavCtrl', function($scope){
    $scope.navItems = [
        // TODO: Hide/Show login/logout
        {
            name: 'Logout',
            url: '#!/logout'
        },
        {
            name: 'Login',
            url: '#!/logins'
        },
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