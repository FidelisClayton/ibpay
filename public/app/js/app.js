angular.module('ibpay', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
  })
  .state('app.pagamento', {
    url: '/pagamento',
    views: {
      'menuContent': {
        templateUrl: 'templates/pagamento.html',
        controller: 'PagamentoCtrl'
      }
    }
  })
  .state('app.estabelecimento', {
    url: '/estabelecimento',
    views: {
      'menuContent': {
        templateUrl: 'templates/estabelecimento.html'
      }
    }
  })
  .state('app.cardapio', {
    url: '/cardapio/:categoria',
    views: {
      'menuContent': {
        templateUrl: 'templates/cardapio.html',
        controller: 'CardapioCtrl'
      }
    }
  })
  .state('app.produto', {
    url: '/produto/:produtoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/produto.html',
        controller: 'ProdutoCtrl'
      }
    }
  })
  .state('app.pedidos', {
    url: '/pedidos',
    views: {
      'menuContent': {
        templateUrl: 'templates/pedidos.html',
        controller: 'PedidosCtrl'
      }
    }
  })
  .state('app.categorias', {
    url: '/categorias',
    views: {
      'menuContent': {
        templateUrl: 'templates/categorias.html',
        controller: 'CategoriasCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/cardapio/Bebidas');
  $urlRouterProvider.otherwise('/login');
});


var SERVER = 'http://localhost:3000/app';
// var SERVER = 'http://ibpay.co/app';