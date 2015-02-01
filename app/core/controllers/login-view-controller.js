angular.module('hf.core').controller('LoginViewController', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.user = {};

    $scope.signIn = function() {
        loginService.login($scope.user);
    }
}]);
