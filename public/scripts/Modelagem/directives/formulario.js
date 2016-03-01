modelagemApp

.directive("formulario",function() {
	return {
		restrict: "E",
		replace: true,
		scope : true,
    transclude: true,
    priority: 100,
		link:{
   		 	pre:function($scope, $elem, $attrs) {
          $scope.$root.$watch(function(newer,old){
            $scope.dado = newer.campoDeFormulario;

             angular.element("form").hide();

            if($scope.$parent.formularioSelecionado) {
              angular.element("form#"+$scope.$parent.formularioSelecionado).show();
            }
          });
   		 	},
   		 	post: function($scope, $elem, $attrs) {
          angular.element("a.item[contextmenu]").bind(function() {
              console.log($scope.segmentoSelecionado);
          });
       	}
 		},
 		controller: function($scope, $element, $attrs) {
      $scope.segment_active = 0;

      $scope.selecionarSegmento = function(segment_name,segment_$index) {
          $scope.segmentoSelecionado = segment_name;
          angular.element(".sessao-de-dados").hide();
          angular.element(".sessao-de-dados#"+$scope.segmentoSelecionado).show();        
          $scope.segment_active = segment_$index;
      };

 			$scope.renderizar = function(key,field) {
        new Renderize().renderize(key,field);
      };
 		},
		templateUrl:'scripts/Modelagem/directives/templates/formulario.html',
	}
})	
;