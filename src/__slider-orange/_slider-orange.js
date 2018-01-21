$('._slider-orange').on('input', function(){
	var x = $('._slider-orange').val();
	$('._slider-orange-cloud').css('left', (x*2.42)-8+'px');
	$('._slider-orange-cloud-triangle').css('left', (x*2.42)+5+'px');
	$('._slider-orange-value').css('left', (x*2.42)-1+'px');
	$('._slider-orange-value').text(x);
});