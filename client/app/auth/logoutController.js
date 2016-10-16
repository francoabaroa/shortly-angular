angular.module('shortly.logout', [])
.controller('LogoutController', function($location, $scope, $window, Auth) {
  $scope.signout = function() {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };
});