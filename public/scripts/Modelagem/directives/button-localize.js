modelagemApp

.directive("buttonLocalize",["sendDatasource",function(sendDatasource){
	return {
		restrict: 'E',
		replace: true,
		scope:{
            form:"=",
        },
		template: '<button class="ui button"><i class="search icon"></i>LOCALIZAR</button>',
        link: function($scope,$elem,$attrs) {
        	$elem.bind("click",function() {
        		console.log($scope.form);

     //    		sendDatasource.save({
     //    			"classUID":"br.gov.rn.parnamirim.datasource.domain.pessoal",
					// "semanticFieldUID":$scope.$parent.formularioSelecionado,
					// "object": object
     //    		});
        	});
        },
	}
}]);