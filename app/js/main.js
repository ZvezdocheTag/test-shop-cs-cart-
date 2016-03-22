

'use strict';

jQuery(document).ready(function() {

    // $('.navbar-toggle').on('click', function(){

    //     if(!!($('#dropdown_menu').css('display', 'none'))) {
    //         $('#dropdown_menu').css('display', 'block');
    //     } else {
    //         $('#dropdown_menu').css('display', 'none');
    //     }
    // })

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText: ["<",">"],
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