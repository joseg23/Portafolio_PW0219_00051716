/* Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. */
function ordenarAscendentemente(array = [1,8,6,2,5]){
    let a, b;
    for(j=0; j<array.length -1; j++){
        for(i=0; i<array.length -1; i++){
            if(array[i]>array[i+1]){
                a=array[i];
                b=array[i+1];
                array[i]=b;
                array[i+1]=a;
            }
        }

    }
    return console.log(array);
}