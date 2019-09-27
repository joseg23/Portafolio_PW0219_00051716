/*Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo. */

function dataType(arr){
    let booleano=0, string=0, numero=0, objeto=0;
    for(let dato of arr){
        console.log(typeof(dato));
        if(typeof(dato)=="boolean"){booleano=booleano+1}
        else if(typeof(dato)=="string"){string=string+1;}
        else if(typeof(dato)=="number"){numero=numero+1;}
        else if(typeof(dato)=="object"){objeto=objeto+1;}
    }

    console.log("Boolean: " +booleano+"\nString :"+string+"\nNumber: "+numero+"\nObjeto:"+objeto)
}