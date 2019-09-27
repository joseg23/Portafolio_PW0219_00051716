/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera tanto de derecha a izquierda y viceversa. Crear una función en JavaScript que reciba como parámetro una palabra.
 La función debe retornar si la palabra es palíndroma o no.  */
 function palindroma(word){
    let word2="";
    for(let i=word.length-1;i>=0;i--){
        word2=word2+word[i];
    }
    
    if(word==word2)
        console.log("Palindroma");
    else
        console.log("No palindroma");
}