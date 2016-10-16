// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signinUser = function () {
    if ($scope.user.username && $scope.user.password) {
      Auth.signin($scope.user)
        .then(function (token) {
          if (token && token.statusText !== 'Internal Server Error') {
            $window.localStorage.setItem('com.shortly', token);
            $location.path('/links');
          } else {
            $scope.error = 'Invalid username or password';
          }
        })
        .catch(function (error) {
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
});

