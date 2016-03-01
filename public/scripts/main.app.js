var mainApp= angular.module('mainApp',[
  'Modelagem',
  'Services',
  'ModelagemFilters',
  'ngRoute',
  
  ])

.config(['$compileProvider','$routeProvider','$locationProvider', 
	function ($compileProvider,$routeProvider,$locationProvider) {
    	$compileProvider.debugInfoEnabled(false);
		
		$routeProvider
			.when("/", {
				controller: 'ModelagemController',
				templateUrl:'/home.html'
			})
			.when('/login', {
				controller: 'LoginController',
				templateUrl:'/login.html'
			})
			.when('/loginerror', {
				controller: 'LoginErrorController',
				templateUrl:'/login.html'
			})
			.otherwise({redirectTo: '/login'});
	}
])

.run(["$rootScope","$location","$cookieStore","$http", 
	function($rootScope,$location,$cookieStore,$http) {
		$rootScope.globals = $cookieStore.get("sessao") || {};

		if($rootScope.globals.sessao) {
			$http.defaults.headers.common["Authorization"] = "Basic " + $rootScope.globals.sessao.authdata;
		}

		$rootScope.$on("$locationChangeStart", function(event,next,current) {

			var paginaRestrita = $.inArray($location.path(),['/login','/loginerror']) === -1;
			var logado = $rootScope.globals.sessao;

			if(paginaRestrita && !logado) {
				$location.path("/login");
			}
		});

	}
])