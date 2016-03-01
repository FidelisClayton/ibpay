angular.module('ibpay').config(function($routeProvider){
  $routeProvider.
    when("/cardapio/:categoria", {
      templateUrl: "views/cardapio.html",
      controller: "CardapioCtrl"
    }).
    when("/", {
      templateUrl: "views/login.html",
    }).
    when("/produto/:id", {
      templateUrl: "views/produto.html",
      controller: "ProdutoCtrl"
    }).
    when("/pedidos", {
      templateUrl: "views/pedidos.html",
      controller: "PedidosCtrl"
    }).
    when("/categorias", {
      templateUrl: "views/categorias.html",
      controller: "CategoriasCtrl"
    }).
    when("/pagamento", {
      templateUrl: "views/pagamento.html",
      controller: "PagamentoCtrl"
    })
    .otherwise("/");
})