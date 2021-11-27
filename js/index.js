$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.cabecalho').css({'background':'#6C5CE7','box-shadow':'0 .2re .5rem rgba(0,0,0,.4'});
        }else{
            $('.cabecalho').css({'background':'none','box-shadow':'none'});
        }
    });
});
