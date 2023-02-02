'use strict';

$(function() {

    // Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");

	checkScroll(scrollPos, introH)

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if ( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

    $('#slider').slick({
      arrows: false,
      dots: true,
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1
    });

    window.addEventListener("resize", function() {
      if (window.innerWidth <= 1200) {
        $('#slider').slick('unslick');
        sliderIsLive = false;
      }
      else {
        if (sliderIsLive) {
          $('#slider').slick();
          sliderIsLive = true;
        }
      }
    });

    $('#burger').on('click', function(e) {
      e.preventDefault();
      $('#nav').toggleClass('show');
    });

    $("[data-scroll]").on('click', function(event) {
      event.preventDefault();

      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;

      nav.removeClass('show');

      $("html, body").animate({
        scrollTop: elementOffset - 70
      }, 800);
    });
});
