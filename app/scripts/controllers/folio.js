'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('alFjrApp')
  .controller('FolioCtrl', function ($timeout,$scope,$rootScope,$state,$location) {  
    var vm = this;
    $rootScope.homehead = true;
    $rootScope.state = $state;
    $(window).scrollTop(0);

    vm.pageData = [
        {name:'GoblexCart.com',
        img:[
            {link:'images/folio/1.jpg'},
            {link:'images/folio/2.jpg'},
            {link:'images/folio/1.jpg'},
        ]},
        {name:'Bluecipherz.com',
        img:[
            {link:'images/folio/2.jpg'},
            {link:'images/folio/1.jpg'},
            {link:'images/folio/2.jpg'},
            {link:'images/folio/1.jpg'},
            {link:'images/folio/2.jpg'},
            {link:'images/folio/1.jpg'},
        ]},
    ];
 
    for(var i = 0; i < vm.pageData.length; i++ ){
        vm.pageData[i].imgM = 0; 
        setImgSet(i);
    }
    
    vm.arrow = function(side,i){ 
        if(side == 0){
            if(vm.pageData[i].imgM < 0){
                vm.pageData[i].imgM++;
                $('.ffbcio'+i).css({'margin-left':vm.pageData[i].imgM*100 +'%'});
            }
        }else{ 
            if(vm.pageData[i].imgM > -1 * ( vm.pageData[i].img.length - 1)){
                vm.pageData[i].imgM--;
                $('.ffbcio'+i).css({'margin-left':vm.pageData[i].imgM*100 +'%'});
            }
            console.log(vm.pageData[i].imgM);
        }
        setArrow(i);
        console.log(i); 
    }
    function setImgSet(i){ 
        setTimeout(function(){
            $('.ffbc_img').css({width:( 100 / vm.pageData[i].img.length ) + '%'});
            $('.ffbc_imgOuter').css({width:( vm.pageData[i].img.length * 100 ) + '%'});
        },100);
        setTimeout(function(){
            $('.ffbcio'+i).css({opacity:1});
        },1000);
        setArrow(i);
    }
    function setArrow(i){
        console.log(i); 
        if (vm.pageData[i].imgM < 0){
            vm.pageData[i].leftArrow=true; 
        }else{
            vm.pageData[i].leftArrow=false; 
        }
        if (vm.pageData[i].imgM > -1 * ( vm.pageData[i].img.length - 1 )) {
            vm.pageData[i].rightArrow=true;
        }else{
            vm.pageData[i].rightArrow=false;
        }
    }


  })