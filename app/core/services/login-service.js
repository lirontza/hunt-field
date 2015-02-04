angular.module('hf.core').service('loginService', ['$q', function ($q) {

    var model = {
        errors : {}
    };

    return {
        getModel: function() {
            return model;
        },

        login : function(user) {

            if(!(user && user.name)) {
                return $q.reject('Missing username');
            }

            var logoutFirst = $q.when();
            if (model.user) {
                logoutFirst = this.logout();
            }

            return logoutFirst
                .then(function() {
                    if (user.name === 'lirontza' && user.password === '1234') { // TODO: go to server
                        model.user = _.clone(user);
                        return model.user;
                    } else {
                        throw new Error('Bad credentials');
                    }
                });
        },

        logout: function() {
            model.user = null;
            return $q.when();
        }
    };
}]);
