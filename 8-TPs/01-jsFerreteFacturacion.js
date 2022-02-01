/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
    let resultado;
	let suma;
	
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
	suma = precio1 + precio2 + precio3;
	resultado = suma;

	alert("La suma es " + resultado);	
}
function Promedio () 
{
    let precio1;
	let precio2;
	let precio3;
    let resultado;
	let productos;
	
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
	productos = precio1 + precio2 + precio3;
	
    resultado = productos / 3;
    resultado = resultado.toFixed(2);
	alert("El promedio es " + resultado);
}
function PrecioFinal () 
{
    let precio1;
	let precio2;
	let precio3;
	let suma;
	let iva;
    let resultado;

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
	suma = precio1 + precio2 + precio3;
    
    iva = suma * 21 / 100;
    resultado = suma + iva;
 
	alert("La suma es " + resultado);	
}