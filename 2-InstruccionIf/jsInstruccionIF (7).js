function Mostrar()
{
//tomo la edad  

    edad= document.getElementById("edad").value 
    eCivil= document.getElementById("estadoCivil").value
if (edad < 18 && eCivil!= "Soltero") 
{
    alert("Es muy pequeno para no ser soltero");
}


}//FIN DE LA FUNCIÓN