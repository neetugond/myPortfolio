$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({
            scrollTop: 0
        });
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $(window).scroll(function (e) {
        // logic
        let windowTop = $(this).scrollTop();

        $('.menu li a').each(function (event) {
            if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                // Remove 'active' from previously highlighted menu items
                $('.menu .active').removeClass('active');
        
                // Highlight the current menu item by adding 'active' class
                $(this).addClass('active');
            }
        });
    })
});