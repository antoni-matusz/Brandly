$(document).ready(function(){
  $('header .bxslider, .trending-slider-container .bxslider').bxSlider({
		controls: false,
		auto: true,
		onSliderLoad: function(){
			$('.trending-slider-container .bx-wrapper').css( "maxWidth", "99%" );
		}
	});

	$('.blog-slider-container .bxslider').bxSlider({
		controls: true,
		auto: false,
		pager: false,
	});

	$('.slider-text-content').on("click", "button", function(){
    window.location.replace("/shop");
	});


});