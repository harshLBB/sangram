'use strict';

sangram.controller('LandingCtrl', ['$location', '$scope', '$http', '$routeParams', function($location, $scope, $http, $routeParams){
  $scope.leader = {};
  $scope.done = false;

  $scope.initialReg = function(){
    $http({
        method : 'POST',
        url : '/api/leader_post',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify($scope.leader),
    }).then(function successCallback(response) {
        $scope.done = true;
        $scope.message = response.data.response;
        // toaster.pop('success', "Success", '<p>Question Saved</p>', 5000, 'trustedHtml');
    }, function errorCallback(response) {
      $scope.message = response.data.response;
    });
  };
}])

sangram.controller('SportCtrl', ['$location', '$routeParams', '$http', '$scope', function($location, $routeParams, $http, $scope){

  console.log($routeParams.sport);

  $http({
    method: 'GET',
    url: '/api/sport/' + $routeParams.sport
  }).then(function successCallback(response){
    $scope.sport = response.data;
  }, function errorCallback(response){

  });

}]);

sangram.controller('DashboardCtrl', ['$location', '$scope', '$http', '$routeParams', function($location, $scope, $http, $routeParams){

  $scope.sports = ["Athletics", "Basketball", "Badminton", "Chess", "Cricket", "Football", "Hockey", "Snooker", "Squash", "Table Tennis", "Taekwondo", "Volleyball", "Weight Lifting"]
  $scope.sportdash = function(sport){
    $scope.currentSport = sport;
  }



  $http({
      method : 'GET',
      url : '/api/sport_list'
  }).then(function successCallback(response) {
      // $scope.sortedQuestions = _.where(response.data, {copy_of: null, standard: $scope.buildData.standard});
      $scope.sports = response.data;
      console.log($scope.sports);
  }, function errorCallback(response) {
      console.log(response.statusText);
  });


}]);

sangram.controller('RegisterCtrl', ['$location', '$http', '$scope', '$rootScope', function($location, $http, $scope, $rootScope, toaster){

$scope.leader = {};
$scope.done = false;

$scope.initialReg = function(){
  $http({
      method : 'POST',
      url : '/api/leader_post',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify($scope.leader),
  }).then(function successCallback(response) {
      $scope.done = true;
      $scope.message = response.data.response;
      console.log(response.data.response);
      // toaster.pop('success', "Success", '<p>Question Saved</p>', 5000, 'trustedHtml');
  }, function errorCallback(response) {
    $scope.message = response.data.response;
    console.log(response.data.response);
  });
};

}]);

sangram.controller('PanelCtrl', ['$location', '$http', '$scope', '$rootScope', function($location, $http, $scope, $rootScope){

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



sangram.controller('LoginCtrl', ['$location', '$http', '$scope', '$rootScope', '_', function($location, $http, $scope, $rootScope, _){
  $scope.loginStudent = function(){
    console.log("Hello!")
  }
}]);



sangram.controller('FourNotCtrl', ['$scope','$routeParams','$rootScope',function($scope, $routeParams,$rootScope) {

    $rootScope.whichView = "FourNotCtrl";
}]);
