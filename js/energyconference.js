$(document).ready(function () {

    var windowH = $(window).height();

    $(".slider").height(windowH)

	$('.slider').glide({
		autoplay: 3000,
        arrows: true,
        nav: true,
    	arrowLeftText: '' ,
    	arrowRightText: '' ,
	});

	var startPos =  $('#header').offset().top;

	$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    
    if( scrolled > startPos){
        $('#header').css({
           position:"fixed",
           top:'0px'
        });
    }else{

        $('#header').css({
            position:"absolute",
            top:startPos+"px"
        });
    }    
	});

        // this is for the navigation scrolling
    $("nav a").on("click", function () {

        // console.log(this);

        // // Save the href of the link we've just clicked
        var href = $(this).attr("href");

        var t = $(href).offset().top;

        // Scroll the body down the page over 700ms
        $("body").animate({
            scrollTop: t - 70
            }, 750);

        // Stop the links acting as links
        return false;

    });

    $('section').waypoint(function (dir) {

        if (dir == "down") {
            // Store the section's id in a variable
            var id = $(this).attr('id');
        } else {
            var id = $(this).prev().attr('id');
        }


        // Remove the 'selected' class from all nav links
        $('nav a').removeClass('selected');

        // Add the 'selected' class to the nav link with the
        // 'data-link' attribute that corresponds to the section's id
        $('nav a[href=#' + id + ']').addClass('selected');


    }, { offset: 100 });

    $("#menu").click(function () {
        $("header nav").fadeToggle();
    });


    //Speaker colour and callout
    $(".speakerimg").hover(function (){

        $(this).children().toggleClass("grey");
    });

    $(".speakerimg").mouseover(function (){
    $(this).siblings(".outer").find(".inner").animate({
            left: "198px",
            width: "210px",
        });
    $(this).siblings(".outer").find("h4").css(
            "color", "#FFFFFF"
        );
    });

    $(".speakerimg").mouseleave(function (){
    $(this).siblings(".outer").find(".inner").animate({
            left: "5px",
        });
    $(this).siblings(".outer").find("h4").css(
            "color", "#197B30"
        );
    });

    $("#sponsors img").hover(function (){
        $(this).toggleClass("grey");
    });

    $(document).trigger("scroll");

});
