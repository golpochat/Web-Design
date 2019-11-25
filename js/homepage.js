/* 
This JS file for Homepage only.

Designed by : Sujan Hossain
        SID : X19170602
*/

jQuery(document).ready(function() {
    // Water ripple effect
    "use strict";
    $(".img-and-review").ripples({
        dropRadius: 15,
        perturbance: 0.2
    });

    // Testimonials/Blurbs/Reviews
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});