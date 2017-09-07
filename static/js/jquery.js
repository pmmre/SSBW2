$(document).ready(function() {

        //alert("Que pasa mamonazo!")
        //console.log("Estas dentro de bares")
        // JQuery code to be added in here.

/*menu = '{{menu}}'

$()*/
<!--

/*
var str1 = "#";
var str2 = "{{ menu }}";
var res = str1.concat(str2);
$(str1).addClass("active");
*/
/*
  var menuOption = "{{ menu }}";
  if (menuOption === "index") {
    $("#index").addClass("active");
  } else if (menuOption === "restaurantes") {
    $("#restaurantes").addClass("active");
  }
*/

 -->

$(".Megusta").click(function(){
	identificado = $(this).attr("id")
	value=$(this).attr("value")


	$.get("/pruebas/pruebas", {"id":$(this).attr("value"),"prueba":"Esto es un texto de prueba"}, function(votos) {
    alert(id);
    alert("hola")
	});

});

});
