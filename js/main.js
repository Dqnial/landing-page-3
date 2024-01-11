$('#menu__toggle').click(function(e) {
    e.preventDefault();
    $('.mobile-nav__inner').toggleClass('mobile-nav__inner__active');
    $('body').toggleClass('lock');
})