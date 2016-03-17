

'use strict';

jQuery(document).ready(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            pagination: false,
            nav:true
        },
        500:{
            items:2,
            nav:true
        },
        700:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            pagination: false,
            nav:true
        }
    }
})
});