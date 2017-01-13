angular.module('Friday', ['ngRoute'])
    .config(ngRouter)


    ngRouter.$inject = ['$routeProvider', '$locationProvider'];

    function ngRouter ($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise('/');

        $routeProvider
            .when('/', {
                templateUrl : '/index.html',

                controller : 'jCtrl',

                controllerAs : 'jason'
            })
            .when('/movies', {
                templateUrl : 'movies.html',

                controller : 'movieCtrl',
            
                controllerAs: 'mCtrl'
            })
    }