angular.module('shortly.services', [])

.factory('Links', function ($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/links'
      })
      .then(function(resp) {
        return resp.data;
      });
    },
    addOne: function(link) {
      return $http({
        method: 'POST',
        url: '/api/links',
        data: {url: link}
      })
      .then(function(resp) {
        return resp;
      });
    }
  };
})
.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    })
    .catch(function (err) {
      return err;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
