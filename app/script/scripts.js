$(document).ready(function(){
  $('.bxslider').bxSlider({
		controls: false,
		auto: true,
		onSliderLoad: function(){
			$('.trending-slider-container .bx-wrapper').css( "maxWidth", "99%" );
		}
	});

	$('.slider-text-content').on("click", "button", function(){
    window.location.replace("/shop");
	});


});