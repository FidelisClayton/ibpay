angular.module('ibpay', ['ionic', 'ionic-material', 'ngRoute', 'truncate', 'ngOnload'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

var SERVER = 'http://localhost:3000/app';
//var SERVER = 'http://ibpay.co/app';