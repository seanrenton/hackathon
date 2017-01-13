angular.module('Friday')
    .controller('jCtrl', jCtrl);

    jCtrl.$inject = ['$http', 'Auth', '$location'];

    function jCtrl(){
        var jason = this;

        jason.Auth = Auth;

        jason.signup = function(){
            $http
                .post('/index', jason.signupUser)
                .then(function(returnData){
                    console.log('SIGNUP : ', returnData);
                    if(returnData.data._id){
                        Auth.user = returnData.data
                        $location.url('/movies');
                    }
                });
        }

        jason.login = function(){
            home.loginLoad = true;
            $http
                .post('/index', jason.loginUser)
                .then(function(returnData){
                    console.log('LOGIN : ', returnData);
                    if(returnData.data._id){
                        Auth.user = returnData.data
                        $location.url('/movies');
                    }
                });
        }
    }