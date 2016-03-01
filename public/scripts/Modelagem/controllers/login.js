
modelagemApp
.controller("LoginController",
	["Authentication","$location","$scope","$rootScope","$window","$routeParams",'$timeout',
	
	function(Authentication,$location,$scope,$rootScope,$window,$routeParams,$timeout) {
		$scope.parametro_de_erro = $routeParams.error;
		$scope.usuario = {};
		$scope.error = false;
		$scope.enviando = false;

		$scope.registrar = function() {
			$scope.enviando = true;

			Authentication.Login($scope.usuario.matricula, $scope.usuario.senha)
				.then(function(response) {
					console.log(response);
					if(response.message.data.status==200) {
						Authentication.SetCredentials($scope.usuario.matricula,$scope.usuario.senha);

						var data = response.message.data.message;
						$scope.enviando = false;
						$rootScope.json = angular.fromJson(data);
						$rootScope.Models = {};

						(function() {
													
							$rootScope.Models = Modelador.entityFactory(data);
							var objView = {};

			                /* iteração dentro das entidades de um campo semantico */
			                angular.forEach($rootScope.Models,function(groupsValue, groupsName) {
				                angular.forEach(groupsValue,function(formsObject, formsName) {
				                	objView[formsName] = {};
					                angular.forEach(formsObject,function(entitysObject,entitysName) {
					                	angular.forEach(entitysObject,function(attributesObject, attributesName) {
					                		if(attributesObject.constructor!==Object) {
					                			if(entitysName!=="Pessoa" && entitysName!=="PessoaFisica") {
					                				objView[formsName][entitysName+'.'+attributesName] = ViewFactory.getView(formsName,entitysName+"."+attributesName);
					                			}
					                		}
					                	});
					                });
				                });
				            });
							$rootScope.campoDeFormulario = {};
				            angular.forEach(objView,function(entitysObject, formsName){
				            	$rootScope.campoDeFormulario[formsName] = new ElementFactory().buildSegment(entitysObject)
				            });

				        })();
					    $scope.error = false;
					    $location.path('/');

					} else {
						$scope.enviando = false;
						$window.location.reload();
						$location.path('/loginerror').search({erro: 'noauth'});
					}
				},function(error) {
					$scope.enviando = false;
					$window.location.reload();
					$location.path('/loginerror').search({erro: 'server'});
					
				});
		}
	}
])

.controller("LoginErrorController",
	["Authentication","$location","$scope","$rootScope","$window","$routeParams",
	function(Authentication,$location,$scope,$rootScope,$window,$routeParams) {
		var erro = $routeParams.erro;
		
		if(erro=="noauth") {
			$scope.error = "Matrícula ou login incorretos";
		}else {
			$scope.error = "Ocorreu algum erro, contacte ao administrador do sistema";
		}

		$scope.registrar = function() {
			$scope.enviando = true;

			Authentication.Login($scope.usuario.matricula, $scope.usuario.senha)
				.then(function(response) {
					console.log(response);
					if(response.message.data.status==200) {
						Authentication.SetCredentials($scope.usuario.matricula,$scope.usuario.senha);

						var data = response.message.data.message;
						$scope.enviando = false;
						$rootScope.json = angular.fromJson(data);
						$rootScope.Models = {};

						(function() {
													
							$rootScope.Models = Modelador.entityFactory(data);
							var objView = {};

			                /* iteração dentro das entidades de um campo semantico */
			                angular.forEach($rootScope.Models,function(groupsValue, groupsName) {
				                angular.forEach(groupsValue,function(formsObject, formsName) {
				                	objView[formsName] = {};
					                angular.forEach(formsObject,function(entitysObject,entitysName) {
					                	angular.forEach(entitysObject,function(attributesObject, attributesName) {
					                		if(attributesObject.constructor!==Object) {
					                			if(entitysName!=="Pessoa" && entitysName!=="PessoaFisica") {
					                				objView[formsName][entitysName+'.'+attributesName] = ViewFactory.getView(formsName,entitysName+"."+attributesName);
					                			}
					                		}
					                	});
					                });
				                });
				            });
							$rootScope.campoDeFormulario = {};
				            angular.forEach(objView,function(entitysObject, formsName){
				            	$rootScope.campoDeFormulario[formsName] = new ElementFactory().buildSegment(entitysObject)
				            });

				        })();
					    $scope.error = false;
					    $location.search('erro', null)
					    $location.path('/');

					} else {
						$window.location.reload();
						$scope.enviando = false;
						$location.path('/loginerror').search({erro: 'noauth'});
					}
				},function(error) {
					$window.location.reload();
					$scope.enviando = false;
					$location.path('/loginerror').search({erro: 'server'});
					
				});
		};
	}
]);