$(function () {
    'use strict';

    // Menu js start

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 130) {
            $(".menu_head").addClass("menu_fix");
        } else {
            $(".menu_head").removeClass("menu_fix");
        }
    });

    // Flow slider js

    $('.flow_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    // Coundown js
    $('.coun_down').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.coun_down2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.coun_down3').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    //Tounament scroll js
    $(".tun_scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });

    // About game slider
    $('.about_game_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
}
]
    });

    // accoudian js
    $('.card').on('click', function () {
        $('.add_border').removeClass('add_border');
        $(this).toggleClass('add_border');
    });

    // video part js
    $('.venobox').venobox({
        spinner: "cube-grid",
        spinColor: "#ff39dc",
    });

});
