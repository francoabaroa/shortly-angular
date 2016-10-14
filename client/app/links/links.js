angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Links refers to the Links factory in Services
  $scope.data = {};
  // var allLinks = Links.getAll();
  // $scope.data.links = allLinks;

  Links.getAll().then(function (links) {
    $scope.data.links = links
  })
  .catch(function(err) {
    console.error(err);
  });




  // $scope.data = { link: [ {}, {}, {} ] }
  // $scope.data.links = [ {}, {}, {}]

});
