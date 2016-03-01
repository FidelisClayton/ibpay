angular.module('ibpay').controller("CardapioCtrl", function($scope, $http, $location, ApiService, $routeParams, $timeout){
	$scope.menuToggle = false;
	$scope.cardapio = [];
	$scope.categoria = $routeParams.categoria;
	
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

	ApiService.getCardapioByCategoria($routeParams.categoria)
		.then(function(response){
			console.log(response.data);
			$scope.cardapio = response.data;
		}, function(error){
			console.log(error);
			$location.url(SERVER);
		});

	$scope.fazerPedido = function(id){
		var data = {
			quantidade: 1
		,	produto: id
		,	mesa: 1
		,	cliente: $scope.cliente._id
		}

		ApiService.postPedido(data)
			.then(function(response){
				console.log(response.data);
			}, function(response){
				console.log(response);
				$location.url(SERVER);					
			});
	};

	$scope.redirecionar = function(produto){
		$timeout(function(){
			$location.path('/produto/' + produto);			
		}, 200);
	}
});