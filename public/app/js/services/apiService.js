angular.module('ibpay').service('ApiService', function($http){
	var SERVER = 'http://localhost:3000';
	//var SERVER = 'http://192.16.0.7:3000';
	//var SERVER = 'http://ibpay.co';

	this.getServer = function(){
		return SERVER;
	}

	this.getUsuario = function(id){
		return $http({
			url: SERVER + '/cliente/' + id
		,	method: 'GET'
		});
	};

	this.getPedidosUsuario = function(id){
		return $http({
			url: SERVER + '/pedidos/' + id
		,	method: 'GET'
		});
	};

	this.getCardapio = function(){
		return $http({
			url: SERVER + '/produtos'
		,	method: 'GET'
		});
	};

	this.getCardapioByCategoria = function(categoria){
		return $http({
			url: SERVER + '/produtos/' + categoria
		,	method: 'GET'
		});
	}

	this.postPedido = function(pedido){
		return $http({
			method: 'POST'
		,	url: SERVER + '/pedidos'
		,	data: pedido
		});
	};

	this.getProduto = function(id){
		return $http({
			method: 'GET'
		,	url: SERVER + '/produto/' + id
		});
	};

	this.getCliente = function(){
		return $http({
			method: 'GET'
		,	url: SERVER + '/cliente'
		});
	}
})