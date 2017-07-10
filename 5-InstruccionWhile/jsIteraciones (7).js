function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var num=0;
	while (respuesta==true){
		contador++;
		num=prompt("Ingrese numero ");
		num=parseInt(num);
		acumulador=acumulador+num;
		//respuesta=prompt("SI para seguir ingresando ");
		respuesta=confirm("**Desea continuar**");
	}	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN