// heightinner with slider
$(function(){
    "use strict";
    var windowH =$(window).height(),
        upperBar=$(".uuper-bar").innerHeight(),
        navBar = $(".navbar").innerHeight();
    $(".slider,.carousel-item").height(windowH - (upperBar + navBar));
//.featured-work 
    $(".featured-work ul .row li ").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        if($(this).data('img')==='all'){
            $('.fall-img .col-sm-3').css('opacity','1');
        }else{
            $('.fall-img .col-sm-3').css('opacity','.08');
           $($(this).data('img')).css('opacity','1');
            
            
        }
    })
});

