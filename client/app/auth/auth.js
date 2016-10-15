// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  

  $scope.signinUser = function () {
    console.log('sign in method in auth controller is running');
    if ($scope.user.username && $scope.user.password) {
      Auth.signin($scope.user)
        .then(function (token) {
          console.log('AUTH CTRL TOKEN: ', token.statusText);
          if (token && token.statusText !== 'Internal Server Error') {
            $window.localStorage.setItem('com.shortly', token);
            $location.path('/links');
          } else {
            console.log('Error insice authcontroller THEN');
            $scope.error = 'Invalid username or password';
          }
        })
        .catch(function (error) {
          console.log('error inside auth controller catch');
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // $scope.signout = function() {
  //   Auth.signout();
  // };
});

