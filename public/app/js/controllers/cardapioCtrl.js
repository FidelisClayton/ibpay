angular.module('ibpay').controller("CardapioCtrl", function($scope, $http, $location, ApiService, $stateParams, $timeout, $state, $ionicActionSheet, $ionicPopup, $ionicHistory){
	$scope.cardapio = [];
	$scope.categoria = $stateParams.categoria;
	

	ApiService.getCliente()
		.then(function(response){
			$scope.cliente = response.data;
		}, function(response){
			console.log(response.statusText);
			if(response.status == 401){
				$location.url(SERVER);							
			}
		});

	ApiService.getCardapioByCategoria($stateParams.categoria)
		.then(function(response){
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
				$scope.sucesso = true;
			}, function(response){
				console.log(response);
				$location.url(SERVER);					
			});
	};

	$scope.pedir = function(id, nome){
		var hideSheet = $ionicActionSheet.show({
	     	buttons: [
	       		{ text: 'Confirmar' }
	     	],
	     	titleText: 'Você pediu 1 ' + nome + ', confirmar?',
	     	cancelText: 'Cancel',
	     	cancel: function() {
	          	hideSheet();
	        },
	     	buttonClicked: function(index) {
	     		$scope.showAlert();
	     		$scope.fazerPedido(id);
	     		hideSheet();
	     	}
	   });
	}

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

	$scope.redirecionar = function(id){
		$state.go('app.produto', {produtoId: id})
	}
});