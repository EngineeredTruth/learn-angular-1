angular.module('app').controller('Ctrl',function($scope){

  //$scope is how you communicate from your Ctrl
  //to your view

  //ng-click
  //ng-model
  //ng-if

  //typically you always want to use ng-if, and not ng-hide or show
  var test = 'Tran';

  $scope.copy = 'Gasms';

  $scope.test = 'Matt';

  $scope.counter = 0;

  $scope.admin = false;

  $scope.log = function(){

    $scope.admin = !$scope.admin;
      console.log($scope.admin);
  }



})
