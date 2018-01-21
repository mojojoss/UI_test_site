$(document).ready(function () {
	$('#input-email').on('input', function () {
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if (pattern.test($(this).val())) {
			$('#email-valid-cloud').removeClass();
			$('#email-valid-cloud').addClass('form_valid')
			$('#email-valid-cloud').html('THANKS!');
		} else {
			$('#email-valid-cloud').removeClass();
			$('#email-valid-cloud').addClass('form_error');
			$('#email-valid-cloud').html('ERROR');
		}

	});
});