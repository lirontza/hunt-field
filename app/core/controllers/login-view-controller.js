angular.module('hf.core').controller('LoginViewController', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.user = {};
    $scope.errors = {};

    $scope.signIn = function() {
        loginService.login($scope.user)
            .then(function(user) {
                $scope.errors.badCredentials = false;
                $scope.user = user;
            })
            .catch(function() {
                $scope.errors.badCredentials = true;
            });
    }
}]);
