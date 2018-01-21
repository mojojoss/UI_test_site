 $('document').ready(function() {
	 $('#input-text').on('input', function(){
		 
      $('#input-text').each(function() {
        if ($(this).val() != '') {
          console.log(32);
          // Если поле не пустое удаляем класс-указание
          $('#text-valid-cloud').removeClass();
		  $('#text-valid-cloud').addClass('form_valid');
		  $('#text-valid-cloud').html('THANKS!');
        } else {
          console.log(33);
          // Если поле пустое добавляем класс-указание
			$('#text-valid-cloud').removeClass();
          $('#text-valid-cloud').addClass('form_error');
		  $('#text-valid-cloud').html('ERROR');
        }
      });
	 });
  });