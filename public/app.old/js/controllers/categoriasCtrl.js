angular.module('ibpay').controller('CategoriasCtrl', function($scope, $http, ApiService, $location, $timeout){
	$scope.menuToggle = false;

	ApiService.getCliente()
		.then(function(response){
			console.log(response.data);
			$scope.cliente = response.data;
		}, function(response){
			console.log(response.statusText);
			if(response.status == 401){
				$location.url(SERVER);
			}
		});

	$scope.redirecionar = function(rota){
		$timeout(function(){
			$location.path('/cardapio/' + rota);			
		}, 200);
	}
});