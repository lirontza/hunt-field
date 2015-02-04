angular.module('hf.core').directive('hfLogin', [function () {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'core/templates/login-template.html',
        controller: 'LoginController',
        link: function () {
        }
    };
}]);
