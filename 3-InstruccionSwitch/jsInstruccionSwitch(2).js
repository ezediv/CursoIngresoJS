function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

if (mesDelAño=="Julio"|| mesDelAño=="Agosto")
alert("Abrigate hace frio");
else 
if(mesDelAño== "Septiembre"|| mesDelAño =="Octubre"||mesDelAño=="Noviembre"|| mesDelAño=="Diciembre")
alert("Ya paso el invierno");
else
alert("Falta para el invierno");
}






  /*switch(mesDelAño){
    case  "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("falta para el invierno ");
    break;
    case "Julio":
    case "Agosto":
    alert("Invierno");
    break;
    default: 
    alert("ya paso inviernom, calor");
    break;
}*/




