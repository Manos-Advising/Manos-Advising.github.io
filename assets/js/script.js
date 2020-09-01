$("#about-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#services-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 1000);
});

$("#contact-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#home-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});