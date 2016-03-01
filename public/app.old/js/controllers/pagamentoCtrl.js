angular.module('ibpay').controller('PagamentoCtrl', function($scope, $http, ApiService, $location, $timeout){
	$scope.menuToggle = false;
	$scope.pagando = false;
	$scope.pagamentoSuccess = false;
	$scope.pagamento = {};
	// $scope.pagamento = {
	// 	card_number: 5900720080344446
	// ,	card_holder_name: "Pagar.me Pagamentos"
	// ,	card_expiration_month: 10
	// ,	card_expiration_year: 17
	// ,	card_cvv: 854
	// };

	$scope.data = {};

	ApiService.getCliente()
		.then(function(response){
			console.log(response.data);
			$scope.cliente = response.data;
			$scope.data.cliente = $scope.cliente._id;
			$scope.getPedidos($scope.cliente._id);
		}, function(response){
			console.log(response.statusText);
			if(response.status == 401){
				$location.url(SERVER);
			}
		});

	$scope.getPedidos = function(id){
		ApiService.getPedidosUsuario(id)
			.then(function(response){
				$scope.meusPedidos = response.data.pedidos;
				$scope.totalConta = response.data.total;
				$scope.data.amount = $scope.totalConta * 100;
				console.log(response);
			}, function(response){
				console.log(response);
			});
	}

	$scope.pagar = function(){
		$scope.pagando = true;
		PagarMe.encryption_key = "ek_test_xj8rccRCO7bxnyXzhmdMHExSYrIrye";
		var creditCard = new PagarMe.creditCard();

		creditCard.cardHolderName = String($scope.pagamento.card_holder_name);
		creditCard.cardExpirationMonth = String($scope.pagamento.card_expiration_month);
		creditCard.cardExpirationYear = String($scope.pagamento.card_expiration_year);
		creditCard.cardNumber = String($scope.pagamento.card_number);
		creditCard.cardCVV = String($scope.pagamento.card_cvv);

		var fieldErrors = creditCard.fieldErrors();

        //Verifica se há erros
        var hasErrors = false;
        for(var field in fieldErrors) { hasErrors = true; break; }

        if(hasErrors) {
            alert(fieldErrors);
            console.log(fieldErrors);
        } else {
            creditCard.generateHash(function(cardHash) {
            	$scope.data.card_hash = cardHash;
                $http({
                	method: 'post'
            	,	url: 'http://ibpay.co/comprar'
            	//,	url: 'http://localhost:3000/comprar'
            	,	data: $scope.data
                }).success(function(response){
                	Materialize.toast('<span class="toast-text">Pagamento efetuado com sucesso.</span>', 4000)
                	$scope.pagando = false;
                	$scope.pagamentoSuccess = true;
                	console.log(response);
                	$timeout(function(){
                		$location.path('/categorias');
                	}, 5000)
                }).error(function(response){
                	console.log(response);
                })
            });
        }
	};
})