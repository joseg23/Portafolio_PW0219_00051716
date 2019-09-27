/*Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo. */
function numberOccurrences(num, arr){
    let total=0;
    for(let data of arr){
        if(num==data)
            total++;
    }
    console.log("Ocurrencias: \n" +total);
}