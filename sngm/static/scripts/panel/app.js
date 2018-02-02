'use strict';

var panel = angular.module('panel', [
  'ngRoute',
  'angular-loading-bar'
]);

panel.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

panel.config(function($interpolateProvider){
     $interpolateProvider.startSymbol('[[').endSymbol(']]');
 });

panel.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
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


panel.config(['$locationProvider','$routeProvider',
  function( $locationProvider, $routeProvider) {


   $routeProvider.
      when('/247sngmLIVEpanel', {
        templateUrl: 'static/views/panelsn.html',
        controller: 'PanelCtrl'
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
      otherwise({
        redirectTo:'/404'
      });
    $locationProvider.html5Mode(true);
  }]);

 // portal.config(['$httpProvider',function($httpProvider) {
 //      //Http Intercpetor to check auth failures for xhr requests
 //      $httpProvider.interceptors.push('authHttpResponseInterceptor');
 //  }]);

 panel.config(function($httpProvider) {
   $httpProvider.defaults.xsrfCookieName = 'csrftoken';
   $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
 });
