angular.module('ibpay').controller("PedidosCtrl", function($http, $scope, ApiService, $location, $timeout){
	$scope.$on('$ionicView.beforeEnter', function () {
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
    });

	$scope.getPedidos = function(id){
		ApiService.getPedidosUsuario(id)
			.then(function(response){
				$scope.meusPedidos = response.data.pedidos;
				$scope.totalConta = response.data.total;
			}, function(response){
				console.log(response);
			});
	}
});