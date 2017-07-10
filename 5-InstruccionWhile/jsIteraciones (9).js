function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta=true;
	var max;
	var min;
	//var primera=true;
	while(respuesta==true)
	{	
		contador++;
		numero=prompt("ingrese numero:");
		numero=parseInt(numero);
		while (isNaN(numero)){
			numero=prompt("Ingrese dato Valido");
			numero=parseInt(numero);
		}
		/*if (primera==true){
			max = num;
			min = num;
			primera= false;}
			else{
				if (numero<min){
					min=num;
				}
				if(numero>max){
					max=numero;
				}
		}*/
		}
		
		if (contador==1){
			max=numero;
			min=numero;	
			}	
			if (numero>max){
				max=numero;
			}
			if(numero<min){
				min=numero;
			}


respuesta=confirm("Desea continuar");
}

document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;


}//FIN DE LA FUNCIÓN