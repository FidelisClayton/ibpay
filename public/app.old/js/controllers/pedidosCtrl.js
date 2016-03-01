angular.module('ibpay').controller("PedidosCtrl", function($http, $scope, ApiService, $location, $timeout){
	$scope.menuToggle = false;

	$scope.getPedidos = function(id){
		ApiService.getPedidosUsuario(id)
			.then(function(response){
				$scope.meusPedidos = response.data.pedidos;
				$scope.totalConta = response.data.total;
				console.log(response);
			}, function(response){
				console.log(response);
			});
	}

	ApiService.getCliente()
		.then(function(response){
			$scope.cliente = response.data;
			$scope.getPedidos($scope.cliente._id);
		}, function(response){
			if(response.status == 401){
				$location.url(SERVER);							
			}
			console.log(response.statusText);
		});

	$scope.redirecionar = function(produto){
		$timeout(function(){
			$location.path('/produto/' + produto);			
		}, 200);
	}
});