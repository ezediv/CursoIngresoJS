function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
if(mesDelAño=="Febrero")
alert("Este mes tiene 28 dias");
else    
if (mesDelAño=="Abril" || mesDelAño=="Junio"|| mesDelAño=="Septiembre"|| mesDelAño=="Diciembre")
alert("Este mes tiene 30 dias");
else
alert("Este mes tiene 31 dias");

}


/*
switch(mesDelAño){
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":
alert("Este mes tiene 31 dias");
break;
case "Abril":
case "Junio":
case "Septiembre":
case "Noviembre":
alert("Este mes tiene 30 dias");
break;
default:
alert("Esete mes tiene 28/29 dias");

}*/
//FIN DE LA FUNCIÓN