Services.factory('sendDatasource',[
    '$resource',
    function($resource){
    	return $resource('https://api.github.com/users/:user',{},{
        get:{method:'GET',isArray:false,headers:{'Authorization':'Basic Z2VhbmZlbGlwZToxMjM0NQ=='} },

      });
    }]);