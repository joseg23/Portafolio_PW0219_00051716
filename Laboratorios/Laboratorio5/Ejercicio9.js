/*Análisis de una circunferencia: Crear una función en JavaScript que pida por el teclado el radio de un circunferencia,
 y calcule el área de esta y lo retorne, si el radio ingresado es negativo o cero, retornará -1.  */
function radio(){
    let num=prompt("Ingrese Numero");
    if(num<=0)
        return console.log("-1");
    else if (numo>0)
        return console.log(Math.PI*num*num);
}
radio();