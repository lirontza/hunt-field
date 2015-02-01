'use strict';

angular.module('hf.core', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'core/templates/login-view-template.html',
            controller: 'LoginViewController'
        });
    }]);