

'use strict';

jQuery(document).ready(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:false
        },
        700:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false
        }
    }
})
});