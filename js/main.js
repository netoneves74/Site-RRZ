$('.menu-anchor').on('click touchstart', function(e){
    $(this).toggleClass('menu-anchor-active');
    $('.feather-menu').toggleClass('parse-white');
    $('.menu').toggleClass('menu-active');
    e.preventDefault();
});

$('.busca-anchor').on('click touchstart', function(e){
    $('.campo-busca').toggleClass('busca-anchor-active');
    $('.close-anchor').toggleClass('close-anchor-active');
    e.preventDefault();
});

$('.close-anchor').on('click touchstart', function(e){
    $(this).toggleClass('close-anchor-active');
    $('.campo-busca').toggleClass('busca-anchor-active');
    e.preventDefault();
});