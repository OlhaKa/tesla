(function ($) {
    'use strict';
    $(window).on('load', function () {
        if ($(".spinner").length > 0) {
            $(".spinner-wrap").fadeOut("slow");
        }
    });
})(jQuery);

$(document).ready(function () {
        $(".phones-toggler, .nav-phones").click(function () {
            getPhonesPosition();
            $(".nav-phones").toggleClass('active');
            $(".tel-list").slideToggle()
        });

    $('.menu_toggler').click(function () {
        $(".sidebar").toggleClass('opened')
    });


    // ----------- HEADER VIEW CHANGE---------
    changeHeaderView();

    function changeHeaderView() {
        var scroll = $(window).scrollTop();
        if (scroll > 160 && $(window).width() > 1200) {
            $('.sidebar').addClass('scrolled');
            $('#tel-num1').appendTo('.nav-phones');
            $('.tel-list').addClass('onScroll');

        } else if (scroll > 160 && $(window).width() < 1200) {
            $('header').addClass('fixed')
        } else {
            $('.sidebar').removeClass('scrolled');
            $('.tel-list').removeClass('onScroll');
            $('#tel-num1').prependTo('.tel-list');
            $('header').removeClass('fixed')
        }
    }

    $(window).on("load resize scroll", function (e) {
        getPhonesPosition();
        changeHeaderView();
    });

    function getPhonesPosition() {
        if ($(window).width() > 1200) {
            var parentPos = $(".nav-phones").position();
            $('.onScroll').css('left', parentPos.left);
        }
    };

    var $menu = $('.sidebar');
    var navPhones = $('.nav-phones');
    var phonesToggler = $('.phones-toggler');
    var $telList = $('.tel-list');
    $(document).mouseup(function (e) {
        if (!$menu.is(e.target) && !$(e.target).is('.menu_toggler')) {
            $menu.removeClass('opened');
        }
    });

    $(document).mouseup(function (e) {
        if ((window.innerWidth) < 1200) {
            if (!$telList.is(e.target)
                && $telList.has(e.target).length === 0
                && !$(e.target).is(navPhones)
                && !$(e.target).is(phonesToggler)) {
                $(".tel-list").slideToggle()
            }
        }
    });
});
