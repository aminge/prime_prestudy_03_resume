jQuery(document).ready(function() {
	var resume = $('.resume')
	$('.resume').remove();
	$('button').on('click', function() {
		$('body').append(resume);
        $('button').remove();
	});
});