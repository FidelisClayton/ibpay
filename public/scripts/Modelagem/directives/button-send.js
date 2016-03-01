modelagemApp

.directive("buttonSend",["sendDatasource",function(sendDatasource){
	return {
		restrict: 'E',
		replace: true,
		scope:{
            form:"=",
            secretaria: "=",
        },
		template: '<button class="ui button" ><i class="plus icon"></i>ADICIONAR</button>',
        link: function($scope,$elem,$attrs) {
        	$elem.bind("click",function() {
        		var entitys = $scope.$root.Models[$scope.secretaria][$scope.form];
                var camposvazios = false;

                angular.forEach(entitys, function(entitysObject,entitysName) {
                    angular.forEach(entitysObject,function(attributesValue,attributesName) {
                        var value = "";

                        if(attributesValue.constructor===Object) {
                            angular.forEach(attributesValue,function(subAttributesValue,subAtributesName) {
                                var elemento = angular.element("form#"+$scope.form).find(angular.element("input#"+attributesName.capitalizeFirstLetter()+"\\."+subAtributesName));
                                value = elemento.val();

                                if(value=="" && elemento[0].name!="id") {
                                    camposvazios = true;
                                }else {
                                    entitys[entitysName][attributesName][subAtributesName] = value;
                                }
                            });
                        }else {
                            value = angular.element("form#"+$scope.form).find(angular.element("input#"+entitysName+"\\."+attributesName)).val();
                            
                            if(value===undefined) {
                                var multiple_select = angular.element("a[data-value]");

                                value = "";
                                for(var i =0;i<multiple_select.length;i++) {
                                    value += multiple_select[i].text+" ";
                                }
                            }
                            entitys[entitysName][attributesName] = value;
                        }
                    });
                });
                if(camposvazios) {
                    angular.element('.ui.red.label').show();
                    angular.element('.ui.green.label').hide();
                }else {
                    angular.element('.ui.red.label').hide();
                    angular.element('.ui.green.label').show();
                    sendDatasource.save({
                        "classUID":"br.gov.rn.parnamirim.datasource.domain.pessoal",
                        "semanticFieldUID": $scope.form,
                        "object": entitys[$scope.form.capitalizeFirstLetter()]
                    });
                    
                }
        		
        	});
        },
	}
}]);