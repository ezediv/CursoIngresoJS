function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta=true;

	while (respuesta==true){

		num=prompt("ingrese numero");
		num=parseInt(num);
		if (num>=0)
			positivo=positivo+num;
		
		else
			negativo=negativo*num;
		
		respuesta=confirm("desea seguir?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN