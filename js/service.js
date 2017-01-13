angular.module('Friday')
    .service('Auth', auth);

    auth.$inject = ['$http'];

    function auth($http){
        this.checkoff = function(){
            return $http.get('/api/me')
        }
    }