$(document).ready(function() {
    // $('.owl-demo').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // })
    $('.owl-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,

    });
});