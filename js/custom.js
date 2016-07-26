$(document).ready(function () {

	$('.parallax-window').parallax({imageSrc: '../img/plane_runway_dark.jpg'});

	// $("#mobile_menu").height(h);

	// $("#mm_open_button").click(function() {
	// 	$(this).addClass("opened");
	// 	$("#mobile_menu").removeClass("closed");
	// });

	// $("#mm_close, #mm_nav li a").click(function() {
	// 	$("#mobile_menu").addClass("closed");
	// 	$("#mm_open_button").removeClass("opened");
	// });

	$(document).on("scroll", function () {

		var h = $(window).height();

		var t = $(document).scrollTop();

		if (t > 0.2*h) {
			$("header").addClass("show");
			$(".menu li a").addClass('link_to_grey')
			$("#plane_logo").fadeIn(400, function() {
			});

		}

		// if (t > 600) {
		// 	$("header").addClass('head_slider');
		// 	$("#logo_float").addClass('slider');
		// } else {
		// 	$("#logo_float").removeClass('slider');
		// 	$("header").removeClass('head_slider');
		// }

	});

	// $(".agenda_bigger").on("click", function () {
	// 	$("#bigger").fadeIn(500);
	// });

	// $("#bigger").on("click", function () {
	// 	$("#bigger").fadeOut(250);
	// });

});