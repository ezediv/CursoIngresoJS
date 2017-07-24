function Mostrar()
{
var i,contadorpar=0;
num=prompt("ingrese numero");
for(i=1;i<=num;i++){
if ((i%2)==0){
   contadorpar++
   alert(i); 
}
}
alert("CANTIDAD DE NUMERO PARES: "+contadorpar);

}