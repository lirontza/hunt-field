angular.module('hf.core').controller('LoginController', ['$scope', 'loginService', function ($scope, loginService) {

    $scope.loginModel = loginService.getModel();

    $scope.logout = function() {
        loginService.logout();
    };
}]);
