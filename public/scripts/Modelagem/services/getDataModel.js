Services.factory('getDataModel',['$resource','$q','$http',
    function($resource,$q,$http) {
    	return $resource('json/datamodel.json',{}, {
        	get:{method:'GET',isArray:false,headers:{'Authorization':'Basic Z2VhbmZlbGlwZToxMjM0NQ=='}}
      	});
    }]);