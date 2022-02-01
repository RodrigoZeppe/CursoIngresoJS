/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let nuevosueldo;
	let descuento;


	sueldo = parseInt(document.getElementById("txtIdImporte").value);

	descuento = sueldo * 25 / 100;
	
	nuevosueldo = sueldo - descuento;

	document.getElementById("txtIdResultado").value = nuevosueldo;
}
