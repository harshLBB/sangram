'use strict';

panel.controller('PanelCtrl', ['$location', '$http', '$scope', '$rootScope', function($location, $http, $scope, $rootScope){

  $scope.college = false;
  $scope.approve = true;

  $scope.collegeView = function(){
    $scope.college = true;
    $scope.approve = false;

    $http({
        method : 'GET',
        url : '/api/college_list'
    }).then(function successCallback(response) {
        // $scope.sortedQuestions = _.where(response.data, {copy_of: null, standard: $scope.buildData.standard});
        $scope.colleges = response.data;
    }, function errorCallback(response) {
        console.log(response.statusText);
    });

  };

  $scope.approveView = function(){
    $scope.college = false;
    $scope.approve = true;
  };

  $http({
      method : 'GET',
      url : '/api/leader_list'
  }).then(function successCallback(response) {
      // $scope.sortedQuestions = _.where(response.data, {copy_of: null, standard: $scope.buildData.standard});
      $scope.leaders = response.data;
  }, function errorCallback(response) {
      console.log(response.statusText);
  });
}]);
