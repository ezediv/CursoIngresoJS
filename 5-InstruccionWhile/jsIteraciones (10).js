function Mostrar()
{

	var contador=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var acumpo=0;
	var acumne=0;
	var contadorcero=0;
	var respuesta=true;
	var pares=0;
	var propo,prone,dif,numero;
	while(respuesta==true)
	{	
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>0){
			acumpo=acumpo+numero;
			contadorpositivos++;
		}
		else{
			if (numero<0){
				acumne=acumne+numero;
				contadornegativos++;

			}
			else{
				contadorcero++;
			}
	}
	
	if((numero % 2)==0 && numero!==0 ){
		pares++;s

	}
	respuesta=(confirm("Desea continuar?"));
	}
	propo=acumpo/contadorpositivos;
	prone=acumne/contadornegativos;
	dif=acumpo-acumne;
	document.write("Suma Negativos: "+acumne);
	document.write("<br />Suma Positivos: "+acumpo);
	document.write("<br /> Cantidad de Positivos: "+contadorpositivos);
	document.write("<br /> Cantidad de negativos: "+contadornegativos);
	document.write("<br /> Cantidad de Ceros: ",contadorcero);
	document.write("<br /> Cantidad de numeros pares: "+pares);
	document.write("<br /> Promedio de positivos: "+propo);
	document.write("<br /> Promedio de negativos: "+prone);
	document.write("<br /> Diferencia pos y nega: "+dif);
	
}