 this.logueado = false;

$("#entrar").click(function(){
	if($("#Usuario").val() == "lupe" && $("#Contraseña").val() == "123"){
		logueado = true;
		if(logueado == true){
			window.location = "./pages/menu.html";
		}
	 	}else{
			Swal.fire('Error');
		}
});

$("#menu").click(function(){
	window.location = "../pages/menu.html";
});

$("#galeria").click(function(){

	window.location = "../pages/galeria.html";
});

$("#pdf").click(function(){

	window.location = "../pages/pdf.html";
});
$("#pregunta").click(function(){

	window.location = "../pages/pregunta.html";
});
window.addEventListener('load',function(){
	$('.container').show(1000);
});

