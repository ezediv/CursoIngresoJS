function Mostrar()
{
var num,i;
num=prompt("ingrese numero");
var primo=true;

for(i=2;i<num;i++){
    if((num%(i))==0){
        primo=false;
        break;   
     };


}
if(primo==false){
    alert("numero NO PRIMO");
}else alert("numero PRIMO");
    



}//FIN DE LA FUNCIÓN