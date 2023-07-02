$(document).ready(function(){

    var owl =  $(".owl-carousel");

    owl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 10,
        center: true,
        nav: true,
        margin: 10,
        dots: false,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            575: { items: 1 },
            768: { items: 1 },
            991: { items: 2 },
            1200: { items: 3 } 
        }
    });
});