$(document).ready(function() {

        //alert("Que pasa mamonazo!")
        //console.log("Estas dentro de bares")
        // JQuery code to be added in here.

/*menu = '{{menu}}'

$()*/

$(".Megusta").click(function(){
	identificado = $(this).attr("id")
	value=$(this).attr("value")


	$.get("/pruebas/pruebas", {"id":$(this).attr("value"),"prueba":"Esto es un texto de prueba"}, function(votos) {
    alert(id);
    alert("hola")
	});

});

});
