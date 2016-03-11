// JavaScript Document

var phonecatApp = angular.module('phonecatApp',['ngRoute',
									'phonecatAnimations',
									'phonecatControllers',
									'phonecatFilters',
									'phonecatServices'
									]);

phonecatApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/phones', {
			templateUrl: 'partials/phonelist.html',
			controller: 'PhonelistCtrl'
		})
		.when('/phones/:phoneId', {
			templateUrl: 'partials/phonedetail.html',
			controller: 'PhonedetailCtrl'
		})
		.otherwise({
			redirectTo: '/phones'
		});
	}]);