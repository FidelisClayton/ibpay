modelagemApp

.directive("buttonClean",function() {
	return {
		restrict: 'E',
		replace: true,
		scope:{},
		template:'<div class="large ui buttons" style="float: right;">'+
                	'<button class="ui button"><i class="remove icon"></i>LIMPAR</button>'+
                	'</div>',
        link: function($scope,$elem,$attrs) {
        	$elem.bind("click",function() {
        		var inputs = angular.element('input[name]');
        		var divs = angular.element('div.text[id]');
        		var multiplesAnsw = angular.element('a[data-value]');

        		for (var i = inputs.length - 1; i >= 0; i--) {
        			if(inputs[i]!==undefined) {
        				inputs[i].value = "";
        			}
        			if(divs[i]!==undefined) {
        				divs[i].textContent = "";
        			}
        			if(multiplesAnsw[i]!==undefined) {
        				multiplesAnsw[i].textContent = "";
        			}
        		};
        	});
        }
	}
});