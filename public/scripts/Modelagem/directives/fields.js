modelagemApp

.directive("fields",function() {
	return {
		restrict: "E",
		replace: true,
		scope : {
      fields: "=",
    },
    priority: 90,
		link: {
   		 	pre:function($scope, $elem, $attrs) {
          angular.forEach($scope.fields, function(field,name) {
            var classe = "field";

            if(name.match(/.id$/g)) {
              classe += " hidden"
            }

            $elem.after('<div class='+classe+' id='+ name +' required>'+field+'</div>');
            $('.ui.dropdown').dropdown();
          });
   		 	},
   		 	post: function($scope, $elem, $attrs) {
          var elemento = angular.element('input[name=Nome]');

          elemento.on("blur keyup change",function(){
              var nome = elemento.val();
              if (nome.length>4) {
                  console.log(nome);
                  var funcionario = new Funcionario()
                  funcionario.nome = nome;
                  $.ajax({type: "POST", url: "http://localhost:8080/protocolo/REST/service/funcionario",
                   dataType: 'json',data:JSON.stringify(funcionario)})
                      .success(function (data) {
                          $('.ui.search')
                            .search({
                              source: content(data)
                            })
                      }).error(function(err) {
                          console.log(err);
                      });
              }
          });
          angular.element('input#Cidadao\\.cpf').mask('999.999.999.99');
       	}
 		},
 		controller: function($scope, $element, $attrs) {

 		},
		
	}
})	
;