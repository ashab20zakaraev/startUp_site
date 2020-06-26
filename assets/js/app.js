$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed header */
    checkScroll(scrollOffset)

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Menu nav toggle */

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
           scrollTop: blockOffset
        }, 800)

    });


    /* About and Partner: Slider */

    $('#about_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('#partner__inner').slick({
        arrows: false,
        dots: true
    });

});















