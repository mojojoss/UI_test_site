$('._slider-aqua').on('input', function(){
	
var slider_aqua_position = $('._slider-aqua').val();

	$('<style>._slider-aqua::-webkit-slider-runnable-track{background:linear-gradient(to right, rgb(78,183,168) ' + slider_aqua_position + '%, rgb(229,229,229) ' + slider_aqua_position + '%);}</style> <style>._slider-aqua::-moz-range-track{background:linear-gradient(to right, rgb(78,183,168) ' + slider_aqua_position + '%, rgb(229,229,229) ' + slider_aqua_position + '%);}</style>').appendTo('head');

	
})
