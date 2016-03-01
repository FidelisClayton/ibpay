angular.module('ModelagemFilters',[])
.filter('firstUpper',function(){
	return function(input){
		return input.capitalizeFirstLetter();
	}
})