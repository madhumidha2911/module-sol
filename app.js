(function(){
"use strict";

angular.module("LunchCheck",[])
.controller("LunchCheckcontroller",LunchCheckcontroller);

LunchCheckcontroller.$inject=["$scope"];

function LunchCheckcontroller($scope){
	$scope.dishes="";

	$scope.checkIfTooMuch=function(){
		var dishes=$scope.dishes;

		dishes=dishes.replace(/[^A-Z0-9]/ig,"");

		var numberofchars = dishes.length;

		if(numberofchars<=0){
			$scope.message="Empty";
			return "Empty";
		}

		dishes=dishes.split(",");
		var items =dishes.length;
		if(items>=1 && items<=3){
			$scope.message="Enjoy!";
		}
		if(items >3){
			$scope.message="Too much!"
		}
	}
}

}())
