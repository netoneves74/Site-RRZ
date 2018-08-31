$('.menu-anchor').on('click touchstart', function(e){
    $(this).toggleClass('menu-anchor-active');
    $('.feather-menu').toggleClass('parse-white');
    $('.menu').toggleClass('menu-active');
    e.preventDefault();
});