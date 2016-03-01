var modelagemApp = angular.module('Modelagem',[]);

modelagemApp.run(function($rootScope,getDataModel,$q){

	$rootScope.json = angular.fromJson(getDataModel.get());
	$rootScope.Models = {};
	
	
});