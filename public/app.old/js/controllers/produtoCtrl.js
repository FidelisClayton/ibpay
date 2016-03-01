angular.module('ibpay').controller("ProdutoCtrl", function($scope, $http, $location, $routeParams, $timeout, ApiService){
	$scope.menuToggle = false;
	$scope.produto = {};
	$scope.pedido = {};
	$scope.pedido.quantidade = 1;
	$scope.menuPedir = false;
	$scope.menuPedidos = false;

	$scope.meusPedidos = [];

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

	$scope.pedir = function(opcao, pedido){
		if(opcao === 'abrir'){
			console.log(pedido);
			$scope.menuPedir = true;							
		}

		if(opcao === 'cancelar'){
			$timeout(function(){
				$scope.menuPedir = false;							
			}, 200);
		}

		if(opcao === 'confirmar'){
			ApiService.postPedido($scope.pedido)
				.then(function(response){
					Materialize.toast('<span class="toast-text">Pedido efetuado com sucesso.</span>', 4000);
					console.log(response);
				}, function(response){
					console.log(response);
				});

			$timeout(function(){
				$scope.menuPedir = false;							
			}, 200);
		}
	}

	ApiService.getCliente()
		.then(function(response){
			$scope.cliente = response.data;
			$scope.pedido.cliente = $scope.cliente._id;
			$scope.getPedidos($scope.cliente._id);
		}, function(response){
			if(response.status == 401){
				$location.url(SERVER);			
			}
			console.log(response.statusText);
		})

	ApiService.getProduto($routeParams.id)
		.then(function(response){
			$scope.produto = response.data;
			$scope.pedido.produto = $scope.produto._id;
		}, function(response){
			console.log(response);
		})

	$scope.voltar = function(categoria){
		$location.path('/cardapio/' + categoria);
	}

});


