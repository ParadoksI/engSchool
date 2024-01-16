$(document).ready(function () {
    $('#burger').on('click', function () {
        $('#menu').slideToggle(500)
    });

    $('.title__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
    });

    $('.present__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        centerPadding: "25%",
        variableWidth: true,
    });

    $('.result__slider').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
    });
});