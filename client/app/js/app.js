'use strict';

angular.module('myApp', ['myApp.controllers',
	'ui.router'])
.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,
	$urlRouterProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider.state('view1', {
		url: '/view1',
		controller: 'Controller1',
		templateUrl: '/app/views/view1.html'
	}).state('view2',{
		url: '/view2/:firstname/:lastname',
		controller: 'Controller2',
		templateUrl: '/app/views/view2.html',
		resolve: {
			names: function(){
				return ['Misko','Vojta','Brad'];
			}
		}
	});
	$urlRouterProvider.otherwise('/view1');
}]);