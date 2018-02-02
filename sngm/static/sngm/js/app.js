'use strict';

var sangram = angular.module('sangram', [
  'ngRoute',
  'angular-loading-bar'
]);

sangram.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

sangram.config(function($interpolateProvider){
     $interpolateProvider.startSymbol('[[').endSymbol(']]');
 });

sangram.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);


//   .config(function ($httpProvider) {
//       $httpProvider.defaults.xsrfCookieName = 'csrftoken';
//       $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
//       $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//   })
//  .run( function run( $http, $cookies ){
//        $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
// })


sangram.config(['$locationProvider','$routeProvider',
  function( $locationProvider, $routeProvider) {


   $routeProvider.
      when('/', {
        templateUrl: 'static/views/home.html',
        controller: 'LandingCtrl'
      }).
      when('/register', {
        templateUrl: 'static/views/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/sponsors', {
        templateUrl: 'static/views/sponsors.html'
      }).
      when('/:sport', {
        templateUrl: 'static/views/sport.html',
        controller: 'SportCtrl'
      }).
      // when('/dashboard', {
      //   templateUrl: 'static/views/dashboard.html',
      //   controller: 'DashboardCtrl'
      // }).
      when('/404', {
        templateUrl: 'static/views/404.html',
        controller: 'FourNotCtrl'
      }).
      // when('/portal/test', {
      //   templateUrl: 'static/views/partials/test.html',
      //   controller: 'TestCtrl'
      // }).
      // when('/course/:courseId/files', {
      //   templateUrl: 'views/partials/course-files.html',
      //   controller: 'CourseFilesCtrl'
      // }).
      // when('/course/:courseId/members', {
      //   templateUrl: 'views/partials/course-members.html',
      //   controller: 'CourseMembersCtrl'
      // }).
      // when('/course/:courseId/feeds/:postId', {
      //   templateUrl: 'views/partials/one-post.html',
      //   controller: 'CourseOnePostCtrl'
      // }).
      // when('/course/:courseId/files/:fileId', {
      //   templateUrl: 'views/partials/one-file.html',
      //   controller: 'CourseOneFileCtrl'
      // }).
      // when('/faculty/:facultyId', {
      //   templateUrl: 'views/partials/faculty.html',
      //   controller: 'FacultyCtrl'
      // }).
      otherwise({
        redirectTo:'/404'
      });
    $locationProvider.html5Mode(true);
  }]);

 // portal.config(['$httpProvider',function($httpProvider) {
 //      //Http Intercpetor to check auth failures for xhr requests
 //      $httpProvider.interceptors.push('authHttpResponseInterceptor');
 //  }]);

 sangram.config(function($httpProvider) {
   $httpProvider.defaults.xsrfCookieName = 'csrftoken';
   $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
 });
