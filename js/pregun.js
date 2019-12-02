//or whith jQuery
$(document).ready(function(){
  $('.datepiker').datepiker();
});
$(document).ready(function() {
  $('select').formSelect();
});
$('#Iniciar').click(function(){
  $('#p1').slideDown();
  $('#Iniciar').hide();
});
$('#Siguiente').click(function(){
	if ($("#p1").show()) {
        $("#p1").hide();
   }
  if ($("#p2").hide()){
  	  $("#p2").show();	

    }
});