/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var num,contpares=0,contimp=0,contdiv=0;
var primo=true;
function ComenzarIngreso () 
{
     num=document.getElementById=("numero").value
     
    if (numero <0){
        alert("El numero debe ser positivo");
        } 

}

function NumerosPares(){
num=document.getElementById("numero").value
num=parseInt(num);
for(i=1;i<num;i++){
if ((i%2)==0){
contpares++;
}
}
alert("Cantidad de pares: "+contpares)
}
//////////////////////////////////////
function NumerosImpares(){
num=document.getElementById("numero").value
num=parseInt(num);
for(i=1;i<num;i++){
if (!(i%2)==0){
contimp++;
}
}
alert("Cantidad de impares: "+contimp);
}
///////////////////////////////////
function NumerosDivisibles(){
    num=document.getElementById("numero").value
    for (i=0;i<=100;i++){
    if ((num%i)==0)
    contdiv++;    
}
    alert("Cantidad de divisibles: "+contdiv);
}
////////////////////////////////////////
function VerificarPrimo(){
    num=document.getElementById("numero").value

   

    for(i=2;i<num;i++){
    if((num%(i))==0){
        primo=false;
        break;   
    }
}

if(primo==false){
    alert("numero NO PRIMO");
}else alert("numero PRIMO");
}

function NumeroPrimos () {

}


