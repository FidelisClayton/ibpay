Services
.factory("Authentication",['$http', '$cookieStore', '$rootScope', '$timeout','$q', 
	function Authentication ($http, $cookieStore, $rootScope, $timeout,$q) {
		var service = {};
		var deferred = $q.defer();

		service.Login = function(matricula,senha,callback) {
			var Authorization = 'Basic '+window.btoa(matricula + ':'+ senha);

			$timeout(function() {
				$http({method:'GET',url:'http://localhost:3000/rest/model',headers:{'Authorization':Authorization}}).
					then(function (res) {
                        console.log(res);
            			if(res) {
            				deferred.resolve({success:true,message:res});
            			}else {
            				deferred.resolve({success:false,message:"Matrícula ou senha incorretos"});
            			}
        			}, function(error) {
        				deferred.reject({success:false,message:error}); 
        			});
			},1000);
			return deferred.promise;
		};

		service.SetCredentials = function(matricula, senha) {
            var authdata = window.btoa(matricula + ':' + senha);
             $rootScope.globals = {
                sessao: {
                    matricula: matricula,
                    authdata: authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('sessao', $rootScope.globals);
        };

		return service;
}]);