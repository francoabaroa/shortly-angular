angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Links refers to the Links factory in Services
  $scope.data = {};
  $scope.text = 'hello franco';
  // var allLinks = Links.getAll();
  // $scope.data.links = allLinks;
  $scope.getAll = function () {
    Links.getAll().then(function (links) {
      $scope.data.links = links;
    }).catch(function (err) {
      console.error(err);
    });
  };
  $scope.getAll();
  // Links.getAll().then(function (links) {
  //   $scope.data.links = links;
  // })
  // .catch(function(err) {
  //   console.error(err);
  // });




  // $scope.data = { link: [ {}, {}, {} ] }
  // $scope.data.links = [ {}, {}, {}]

});
