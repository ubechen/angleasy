/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Back to Top
		$(document).ready(function(){
			
			$('.back-to-top').hide();

            //Check to see if the window is top if not then display button
            $(window).scroll(function(){

                // Show button after 100px
                var showAfter = 100;
                if ($(this).scrollTop() > showAfter) {                 
                    $('.back-to-top').fadeIn();
                } else {   
                    $('.back-to-top').fadeOut();
                }
            });
            
            //Click event to scroll to top
            $('.back-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
            
        });

	// Item animation when scroll
		$(".scroll-bottom-top").boxLoader({
			direction:"y",
			position: "30%",
			effect: "fadeIn",
			duration: "1s",
			windowarea: "80%"
		});

		$(".scroll-left-right").boxLoader({
			direction:"x",
			position: "-30%",
			effect: "fadeIn",
			duration: "1s",
			windowarea: "80%"
		});

		$(".scroll-right-left").boxLoader({
			direction:"x",
			position: "30%",
			effect: "fadeIn",
			duration: "1s",
			windowarea: "80%"
		}); 

	// Youtube Popup
		$(".youtube-link").grtyoutube();

})(jQuery);