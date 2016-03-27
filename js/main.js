jQuery(document).ready(function($) {
	
	$('.s-icons').hover(function() {
		var icon  = $(this).find('.fa');
		icon.css('color', '#54B49F');
	}, function() {
		var icon  = $(this).find('.fa');
		icon.css('color', '#BDCBCB');
	});

	$('.content-wrapper').css('min-height', '600px');
	
});