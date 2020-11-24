/**
* Creo la función redireccionar, la cual se encargará
* de mandarnos a Google tras pulsar aceptar y esperar
* 5 segundos.
**/
function redireccionar() {

    setTimeout("location.href='http://www.google.com'", 5000);

  }

alert("Nos vamos!! En 5 segundos tras pulsar aceptar.");

redireccionar();