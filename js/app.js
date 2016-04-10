//esconder el mensaje
function enviarAdvertencia()
{
jQuery(".advertencia").hide().show("slow");
}

// mostrar el mensaje lentamente usando atajo $

//$(".advertencia").show("slow");

$(document).ready(enviarAdvertencia);