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

	function showCurrentYear() {
		var d = new Date();
		var n = d.getFullYear();
		$("#time").text(n);
	}

	showCurrentYear();

	function sendEmail(){
		var form = '.subscribe-section form';
		$(form).on('submit',function (e) {
			e.preventDefault();
			e.stopPropagation();
			var email = $(form + ' input[type="email"]').val();

			$.ajax({
				url: "mail.php",
				type: 'POST',
				data: {
					email: email,
				},
				success: function(result){
					if(result == 'email=true'){
						$(form + ' label').text('You have subscribed our newsletter').css({"color": "green"});
						$(form + ' input[type="email"]').val('');
					}else{
						$(form + ' input[type="submit"]').val('ERROR').css({"color": "red"});
						location.reload();
					}
				}
			});
		}); 
	}

	sendEmail();

});