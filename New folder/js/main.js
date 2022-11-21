(function ($) {
	"use strict";

	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(1200).fadeOut('slow');
	    });
	}());

	// slide-start
	$('.slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 1
		  }
		}
	  })
	// slide-end





	


	// wow/aos-animetion-start
    var wow = new WOW(
        {
            mobile: false,
        }
    )
    wow.init();
	AOS.init();
	// wow/aos-animetion-start
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
})(jQuery);