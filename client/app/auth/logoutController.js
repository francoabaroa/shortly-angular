angular.module('shortly.logout', [])
.controller('LogoutController', function($location, $scope, $window, Auth) {
  $scope.signout = function() {
    console.log('sign out method is running!');
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };
});