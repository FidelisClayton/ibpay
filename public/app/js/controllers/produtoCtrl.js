angular.module('ibpay').controller("ProdutoCtrl", function($scope, $http, $location, $stateParams, $timeout, ApiService, $ionicActionSheet, $ionicPopup){
	$scope.produto = {};
	$scope.pedido = {};
	$scope.pedido.quantidade = 1;
	$scope.sucesso = false;

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

	ApiService.getProduto($stateParams.produtoId)
		.then(function(response){
			$scope.produto = response.data;
			$scope.pedido.produto = $scope.produto._id;
			console.log(response);
		}, function(response){
			console.log(response);
		})

	$scope.voltar = function(categoria){
		$location.path('/cardapio/' + categoria);
	}

	$scope.confirmar = function() {
	   	var hideSheet = $ionicActionSheet.show({
	     	buttons: [
	       		{ text: 'Confirmar' }
	     	],
	     	titleText: 'Você pediu ' + $scope.pedido.quantidade + ' ' + $scope.produto.nome + ', confirmar?',
	     	cancelText: 'Cancel',
	     	cancel: function() {
	          	hideSheet();
	        },
	     	buttonClicked: function(index) {
	     		$scope.showAlert();
	     		console.log($scope.pedido);
	     		ApiService.postPedido($scope.pedido)
				.then(function(response){
					$scope.sucesso = true;
					console.log(response);
				}, function(response){
					console.log(response);
				});

	     		hideSheet();
	     	}
	   });
 	};

 	$scope.showAlert = function() {
   		var alertPopup = $ionicPopup.alert({
     		title: 'Pedindo',
     		template: '<ion-spinner ng-if="!sucesso" class="spinner-center" icon="lines"></ion-spinner><div ng-if="sucesso" style="text-align: center">Pedido efetuado com sucesso</div>',
     		scope: $scope
   		});
   		alertPopup.then(function(res) {
     		console.log('Thank you for not eating my delicious ice cream cone');
   		});
 	};

});


