angular.module('myApp',['ngAnimate']).controller('myController', ['$scope','$http',
	function($scope,$http){
         
        $scope.viewProjects = function(){
        	$scope.about = false;
        	$scope.projects = true;
            $http.get('projects.json').success(function(data){
            	    $scope.page_one = data.page_one;
                    $scope.page_two = data.page_two;
            }).error(function(err){
            	$scope.error = err;
            });
        	
        };

        $scope.viewPortfolio = function(){
        	$scope.about = true;
        	$scope.projects = false;
        };

}]);