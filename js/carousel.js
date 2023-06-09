$(document).ready(function(){

    var owl =  $(".owl-carousel");

    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 10,
        dots: true,
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