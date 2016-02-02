'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('alFjrApp')
  .controller('MainCtrl', function ($timeout,$scope,$rootScope,$state,$location) {  
    
    var vm = this;
    $rootScope.homehead = false;
    $rootScope.state = $state;
    

    vm.userData = {
      id:1,
    }

    var y;
    $(window).scroll(function(){ 
        y = $(window).scrollTop(); 
        if($state.current.name == 'home'){
          if(y > 380){  
              $rootScope.homehead = true;  
              $scope.$apply();
          }else{
              $rootScope.homehead = false;  
              $scope.$apply();
          }  
        }
    });  

    vm.go = function(path){
        $location.path(path);
    }

  })
  .controller('NavCtrl', function ($timeout,$scope,$rootScope,$state) {  
        
    var vm = this;
    vm.changeState = function(state){   
      $state.go(state);
    }

  });
