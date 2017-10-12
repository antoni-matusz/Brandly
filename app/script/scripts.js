$(document).ready(function(){
  $('.bxslider').bxSlider({
		controls: false,
		auto: true,
	});

	$('.slider-text-content').on("click", "button", function(){
    window.location.replace("/shop");
	});


});