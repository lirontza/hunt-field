angular.module('hf.core').service('loginService', [function () {

    var model = {};

    return {
        getModel: function() {
            return model;
        },

        login : function(user) {
            if (user && user.name) {

                if (model.loggedInUser) {
                    this.logout();
                }

                model.loggedInUser = user;

                alert('logged in');
            }
        },

        logout: function() {
            model.loggedInUser = null;

            alert('logging out');
        }
    };
}]);
