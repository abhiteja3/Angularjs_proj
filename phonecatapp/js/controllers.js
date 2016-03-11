// JavaScript Document
'use strict';
var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhonelistCtrl',['$scope', 'Phone', function($scope,Phone){
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhonedetailCtrl', ['$scope','$routeParams', 'Phone',
		function($scope,$routeParams,Phone){
			$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
						$scope.mainImageUrl = phone.images[0];
			});
				
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
			};
}]);