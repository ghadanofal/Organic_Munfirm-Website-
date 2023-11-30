$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
            margin: 19,
            nav: false,
            responsive: {
                0: {
                    items: 1 // Number of items to show on mobile
                },
                768: {
                    items: 2 // Number of items to show on tablets
                },
                1024: {
                    items: 3 // Number of items to show on desktop
                }
            }
        
    })
});