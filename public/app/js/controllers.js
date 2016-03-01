angular.module('ibpay').controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, ApiService) {
  ApiService.getCliente()
    .then(function(response){
      console.log(response.data);
      $scope.cliente = response.data;
    }, function(response){
      console.log(response.statusText);
      if(response.status == 401){
        $location.url(SERVER);
      }
    });
});